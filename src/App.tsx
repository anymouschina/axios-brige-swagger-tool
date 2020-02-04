// src/App.tsx
import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
// import Rightview from './components/view/view'
// 首先我们需要导入一些组件...
import { HashRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom'
import Guide from './components/guide/index'
import './App.css';
const { Header, Footer ,Content} = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo">axios brige</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Router><Link to="/guide">Guide</Link></Router></Menu.Item>
                <Menu.Item key="2"><Router><Link to="/dashboard">dashboard</Link></Router></Menu.Item>
            </Menu>
          </Header>
          <Content style={{height:'calc(100vh - 133px)',overflow:'auto'}}>
          <Router>
            <Switch>
                <Route exact path="/guide" component={Guide} />
                {/* <Route exact path="" component={NotFound}/> */}
                <Redirect exact from="/" to="/guide"></Redirect>
              </Switch>
            </Router>
          </Content>
          <Footer style={{ textAlign: 'center' }}>axios brige Design ©2020 Created by beq and email 624144061@qq.com</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;