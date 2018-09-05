import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { Layout } from 'antd';
import PhoneList from './pages/PhoneList';
import PhoneDetail from './pages/PhoneDetail';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout className="layout">
            <Header>
              <div className="logo" />
            </Header>
            <Content className="content-wrap">
              <div className="content">

                <Route exact path="/" component={PhoneList} />
                <Route path={`/:topicId`} component={PhoneDetail} />

              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2018
            </Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
