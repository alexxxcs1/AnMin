import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import style from './LoginView.scss'
import {api} from 'common/app'

import loginbot from 'assets/loginbot.png'
import logintitle from 'assets/logintitle.png'
import loginlogo from 'assets/loginlogo.png'

import RaterLogin from './Components/RaterLogin'
  
export class LoginView extends Component {
constructor(props) {
  super(props);
  this.state = {
    SelectLoginType:null,
  };
  this.refreshProps = this.refreshProps.bind(this);
  this.GotoScanQR = this.GotoScanQR.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
GotoScanQR(){
  api.getWeixinLoginUrl().then(res=>{
    if (res.code == 200) {
      window.location.href = res.data;
    }else{
      console.log(res.msg);
    }
  },err=>{

  })
}
render() {
  return (
    <div className={[style.LoginBox,'childcenter'].join(' ')}>
          
          {/* <div className={[style.bkgbox,'childcenter'].join(' ')}>
            <div className={[style.LoginButton,'childcenter'].join(' ')} onClick={this.GotoScanQR}>
              使用微信登录
            </div>
            <img src={wxloginbot} alt=""/>
          </div> */}
          <div className={style.Content}>
            <div className={style.LogoBox}>
              <img src={loginlogo} alt=""/>
            </div>
            {this.state.SelectLoginType==null?<div className={[style.ButtonBox,'childcenter childcolumn'].join(' ')}>
              <div className={style.TitleBox}>
                <img src={logintitle} alt=""/>
              </div>
              <div className={[style.ButtonGroup,'childcenter'].join(' ')}>
                <div className={[style.Button,'childcenter'].join(' ')} onClick={this.GotoScanQR}>参赛选手</div>
                <div className={[style.Button,'childcenter'].join(' ')} onClick={(()=>{
                  this.setState({
                    SelectLoginType:'rater'
                  })
                }).bind(this)}>专家评审</div>
              </div>
            </div>:
            <div className={[style.RaterLoginBox,'childcenter childcontentstart'].join(' ')}><RaterLogin /></div>
            
          }
          </div>
          <div className={style.BotBackground}>
            <img src={loginbot} alt=""/>
          </div>

    </div>
   )
   }
}
export default LoginView