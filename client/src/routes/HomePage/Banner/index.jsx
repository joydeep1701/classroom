import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { browserHistory } from '../../../index';

class Banner extends React.PureComponent {
  render() {
    const className = 'home-banner';
    return (
      <div className={`home-layout-wrapper ${className}`} style={{
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
      }}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              This is Classroom
            </h1>
            <p key="p">
              Classroom is a low-latency realtime learning platform optimized for the best learning experience.
            </p>
            <p key="q">
              Experience realtime interactive & productive E-learning
            </p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                  browserHistory.push('/class/random');
              }}
              >
                Join Meeting
              </Button>
            </span>
          </QueueAnim>          
        </div>
      </div>
    );
  }
}

export default Banner;