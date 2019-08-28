import React from 'react';
import {
  Layout, 
  Typography,
} from 'antd';
import {
  FooterBar,
  NavBar,
} from '../../components';
import notFoundSVG from './notFound.svg';

const { Header, Content } = Layout;

export default function NotFound(props)  {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: '0 50px', textAlign: 'center' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, margin: 50 }}>
          <Typography.Title level={2}>
            4Oh!4
          </Typography.Title>
          <br />
          <img src={notFoundSVG} alt="not found" width="252" height="294" />
          <br />
          <br />
          <Typography.Title level={4}>
            Sorry for that
          </Typography.Title>
          <p>Path you were looking for can't be found</p>
        </div>
      </Content>
      <FooterBar />
    </Layout>
  )
}