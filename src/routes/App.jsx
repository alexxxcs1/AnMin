import React, { Component } from 'react';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
// import style from  './App.scss';

import Home from 'routes/PC/Home'
import UserLogin from 'routes/PC/UserLogin'
import RaterLogin from 'routes/PC/RaterLogin'

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <HashRouter >
          <div style={{height: '100%'}}>
              <Switch>
                  <Route path='/rlogin' component={RaterLogin} />
                  
                  <Route path='/ulogin' component={UserLogin} />
                  {/* 首页 */}
                  <Route path='/' component={Home} />
                    
              </Switch>
          </div>
        </HashRouter>
        {/* <AnimateBackground /> */}
      </div>
    );
  }
}

export default App;
