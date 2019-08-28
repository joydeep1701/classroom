import React from 'react';
import {
  Layout,
  Row,
  Col,
} from 'antd';
import {
  DrawingPad
} from '../../containers';
import {
  NavBar,
} from '../../components';

const { Header, Content } = Layout;


class LiveSession extends React.Component {
  render() {
    const { innerHeight, innerWidth } = window;
    const canvasHeight = innerHeight-72;
    const canvasWidth = innerWidth > 1000?1000:innerWidth;
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Layout style={{ height: '100vh' }}>
          <Header>
            <NavBar />
          </Header>
          <Content>
            <div style={{ background: '#fff', height: '100%'}}>
            <Row gutter={12}>
              <Col span={16}>
                <div>
                <DrawingPad 
                  height={canvasHeight}
                  width={canvasWidth}
                />
                </div>
              </Col>
              <Col span={4}>
                <div>col-6</div>
              </Col>
              <Col span={4}>
                <div>col-6</div>
              </Col>
            </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LiveSession;