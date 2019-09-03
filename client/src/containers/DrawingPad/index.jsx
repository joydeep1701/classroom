import React from 'react';
import { fromEvent } from 'rxjs';
import {
  switchMap,
  takeUntil,
  map,
  filter,
  tap,
  pairwise,
  throttleTime,
 } from 'rxjs/operators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  publishDrawingData,
  startDrawingPublisher,
} from './actions';

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

class DrawingPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.canvasRef = React.createRef();
    this.canvasCtx = null;
  }
  componentDidMount() {
    // Request Socket Connection
    this.props.startDrawingPublisher();

    // Set Context
    const canv = this.canvasRef.current
    this._offsetLeft = canv.offsetLeft;
    this._offsetTop = 64;//  canv.offsetTop;
    this.canvasCtx = canv.getContext('2d');

    const scale = window.devicePixelRatio;
    const rect = canv.getBoundingClientRect();

    console.log(rect, scale, this._offsetLeft, this._offsetTop);
    this._startCanvasObs();
    this._listenOnSocket();
  }
  _drawCanvas = ({ from, to }) => {
    this.canvasCtx.beginPath();
    this.canvasCtx.moveTo(from.x, from.y);
    this.canvasCtx.lineTo(to.x, to.y);
    this.canvasCtx.stroke();
  }
  _broadcastToSocket = (event) => {
    if (window.socket) {
      window.socket.emit('drawEvent', event);
    }
  }
  _listenOnSocket = () => {
    if (window.socket) {
      fromEvent(window.socket, 'drawEvent')
        .pipe(
          filter((e) => {
            return e.clientId !== window.socket.id;
          }),
          map((e) => ({
            ...e.payload,
          }))
        )
        .subscribe((pair) => {
          const { from , to } = pair;
          this._drawCanvas({ from, to });
        })
    }
  }
  _getEventObs = e => fromEvent(this.canvasRef.current, e);

  _getAllEventObs = () => {
    if (!is_touch_device()) {
      return {
        start$: this._getEventObs('mousedown'), 
        move$: this._getEventObs('mousemove'), 
        cancel$: this._getEventObs('mouseleave'), 
        end$: this._getEventObs('mouseup'),
      };
    } else {
      return { 
        start$: this._getEventObs('touchstart'), 
        move$: this._getEventObs('touchmove'), 
        cancel$: this._getEventObs('touchcancel'), 
        end$: this._getEventObs('touchend'),
      };
    }
  }

  _startCanvasObs = () => {
    const { start$, move$, cancel$, end$ } = this._getAllEventObs();
    start$
      .pipe(
        tap(console.log),
        switchMap(() =>
          move$.pipe(
            // tap(console.log),
            tap(e => e.preventDefault()),
            map(e => ({
              x: e.offsetX || (e.touches[0].pageX),
              y: e.offsetY || (e.touches[0].clientY - this._offsetTop),
            })),
            throttleTime(20),
            pairwise(),
            // tap(console.log),
            takeUntil(end$),
            takeUntil(cancel$)
          )
        )
      )
      .subscribe((pair) => {
        const [from, to] = pair;
        this._drawCanvas({ from, to });
        this._broadcastToSocket({ from, to });
        // this.props.publishDrawingData({ from, to });
      });
  }
  render() {
    console.log(is_touch_device());
    return (
      <canvas
        style={{ overscrollBehavior: 'none' }}
        height={this.props.height}
        width={this.props.width}
        ref={this.canvasRef}
      ></canvas>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    publishDrawingData,
    startDrawingPublisher,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DrawingPad);