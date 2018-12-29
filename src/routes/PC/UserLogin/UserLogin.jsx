import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import style from './UserLogin.scss'
  
export class UserLogin extends Component {
constructor(props) {
  super(props);
  this.state = {};
     this.refreshProps = this.refreshProps.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
render() {
  return (
    <div className={[style.LoginBox,'childcenter'].join(' ')}>
          <div className={[style.LoginButton,'childcenter'].join(' ')} >
            使用微信登录
          </div>
    </div>
   )
   }
}
export default UserLogin