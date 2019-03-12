import React, { Component } from 'react';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
// import style from  './App.scss';

import Home from 'routes/PC/Home'
import UserReg from 'routes/PC/UserReg'
import LoginView from 'routes/PC/LoginView'

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <HashRouter >
          <div style={{height: '100%'}}>
              <Switch>
                  <Route path='/login' component={LoginView} />
                  <Route path='/userregister' component={UserReg} />
                  {/* 首页 */}
                  <Route path='/pc' component={Home} />
                  <Redirect from="/" to="/login" />
              </Switch>
          </div>
        </HashRouter>
        {/* <AnimateBackground /> */}
      </div>
    );
  }
}

export default App;
