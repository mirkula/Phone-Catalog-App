import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import { Layout } from 'antd';
import PhoneListContainer from './phones';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="layout">
          <Header>
            <div className="logo" />
          </Header>
          <Content className="content-wrap">
            <div className="content">

              <PhoneListContainer />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018
          </Footer>
        </Layout>
      </Provider>
    );
  }
}

export default App;
