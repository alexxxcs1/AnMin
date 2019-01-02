import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import style from './Home.scss'

import TopBanner from 'components/TopBanner'
import UserIndex from './components/UserIndex'
import RaterIndex from './components/RaterIndex'


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount()
  {
  }
  render() {
    return (
      <div className={style.HomeBox}>
          <TopBanner />
          {/* <UserIndex /> */}
          <Switch>
            <Route path='/pc/user' component={UserIndex} />
            <Route path='/pc/rateruser' component={RaterIndex} />
          </Switch>
      </div>
    )
  }
}

export default Home
