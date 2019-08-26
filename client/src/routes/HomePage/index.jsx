import React from 'react';
import { Layout } from 'antd';
import {
  NavBar,
  FooterBar,
} from '../../components';
import Banner from './Banner';
import './style.css'


function HomePage() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Header>
        <NavBar />
      </Layout.Header>
      <Layout.Content style={{ padding: '0 0px', textAlign: 'center' }}>
        <div className="home-page">
          <Banner />
        </div>
      </Layout.Content>
      <FooterBar />
    </Layout>

  )

}

export default HomePage;