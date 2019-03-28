import React, { Component } from "react";
import style from "./RaterLogin.scss";
import {api} from 'common/app'

import topbg from "assets/topbg.png";
import logo from "assets/logo.png";
import earth from "assets/earth.png";
import logintitle from 'assets/logintitle.png'
import customerservice from 'assets/customerservice.png'

export class RaterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        userpw:'',
        customerservice:false,
        bgboxoffset:{
            top:0,
            right:0
        }
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.setbgBoxOffset = this.setbgBoxOffset.bind(this);
    this.Login = this.Login.bind(this);
    this.HandleInputChange = this.HandleInputChange.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.setbgBoxOffset();
  }
  refreshProps(props) {}
  setbgBoxOffset(){
      // console.log(this.refs.boxbg.offsetTop,this.refs.boxbg.offsetLeft);
      // this.state.bgboxoffset.top = -this.refs.boxbg.offsetTop + 'px';
      // this.setState(this.state);
  }
  Login(){
    if (this.state.username&&this.state.userpw) {
      api.raterLogin(this.state.username,this.state.userpw).then(res=>{
        if (res.code === 200) {
          // this.props.history.push('/pc/rateruser')
          window.location.hash = '#/pc/rateruser';
        }else{
          alert(res.msg)
        }
      },err=>{
  
      })
    }else{
      alert('请输入正确的账号及密码')
    }
    
  }
  HandleInputChange(type,e){
    this.state[type] = e.target.value;
    this.setState(this.state);
  }
  render() {
    return (
        [this.state.customerservice?<CustomerService return={(()=>{this.setState({customerservice:false})}).bind(this)}/>:'',!this.state.customerservice?<div className={[style.LoginBox,'childcenter'].join(' ')} >
        {/* style={{backgroundImage:'url('+topbg+')'}} */}
          
          <div
            className={[style.LoginForm, "childcenter", "childcolumn"].join(
              " "
            )}>
            <div className={style.TitleBox}>
              <div className={style.TitleImage}><img src={logintitle} className={style.logo}/> </div>
              <div className={[style.TextRow, "childcenter"].join(" ")}>
                欢迎评审专家登录
              </div>
              {/* <div className={[style.TextRow, "childcenter"].join(" ")}>
                2019青年讲者优秀病例征文平台
              </div>
              <div className={[style.TextRow, "childcenter"].join(" ")}>
                欢迎登录
              </div> */}
            </div>

            <div
              className={[
                style.FormInputGroup,
                "childcenter",
                "childcolumn"
              ].join(" ")}>
              <div className={[style.InputBox, "childcenter"].join(" ")}>
                <div
                  className={[
                    style.InputName,
                    "childcenter",
                    "childcontentstart"
                  ].join(" ")}>
                  账号
                </div>
                <div className={style.InputValue}>
                  <input onChange={this.HandleInputChange.bind(this,'username')} type="text" />
                </div>
              </div>
              <div className={[style.InputBox, "childcenter"].join(" ")}>
                <div
                  className={[
                    style.InputName,
                    "childcenter",
                    "childcontentstart"
                  ].join(" ")}>
                  密码
                </div>
                <div className={style.InputPasswordValue}>
                  <input onChange={this.HandleInputChange.bind(this,'userpw')} type="password" />
                </div>
                <div className={[style.ForgetPasswordButton,'childcenter'].join(' ')} onClick={(()=>{this.setState({customerservice:true})}).bind(this)}>
                  <span>忘记密码</span>
                </div>
              </div>
            </div>

            <div className={[style.LoginButton, "childcenter"].join(" ")} onClick={this.Login}>
              确定
            </div>
          </div>
          {/* <img className={style.boxbg} src={topbg} ref='boxbg' style={{'--bodywidth':window.document.body.clientWidth + 'px'}} />    */}
        </div>:'']
    );
  }
}

class CustomerService extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return <div className={[style.CustomerServiceBox,'childcenter childcolumn'].join(' ')}>
      <img className={style.serviceimg} src={customerservice} alt=""/>
      <span className={style.tips}>联系客服</span>
      <div className={[style.ReturnButton,'childcenter'].join(' ')} onClick={this.props.return}>返回</div>
    </div>
  }
}

export default RaterLogin;
