import React, { Component } from 'react'
import style from './TopBanner.scss'
import headshot from './imgs/headshot.jpg'
import {api} from 'common/app'
  
export class TopBanner extends Component {
constructor(props) {
  super(props);
  this.state = {
    userinfo:null,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.getUserInfo = this.getUserInfo.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getUserInfo();
}
refreshProps(props) {
  
}
getUserInfo(){
    api.getUserInfo().then(res=>{
      console.log(res);
      if (res.code == 200) {
        this.state.userinfo = res.data;
      }else{
        console.log(res.msg);
      }
      this.setState(this.state);
    },err=>{
      console.log(err);
      
    })
  }
render() {
  return (
    <div className={[style.TopBannerBox,'childcenter'].join(' ')}>
        <div className={[style.BannerDetial,'childcenter'].join(' ')}>
            <div className={[style.GroupBox,'childcenter','childcontentstart'].join(' ')}>
                <div className={style.TextSlogan}>2019青年讲者优秀病例征文平台</div>
            </div>
            <div className={[style.GroupBox,'childcenter','childcontentend'].join(' ')}>
                {this.state.userinfo?<div className={[style.UserInfo,'childcenter'].join(' ')}>
                    <div className={style.UserHeadShot}>
                        <img src={this.state.userinfo.headurlimg} alt=""/>
                    </div>
                    <div className={style.UserName}>
                        {this.state.userinfo.name}
                    </div>
                    <div className={style.ExitButton}>退出</div>
                </div>:<div className={[style.UserInfo,'childcenter'].join(' ')}>
                    <div className={style.ExitButton}>去登录</div>
                </div>}
            </div>
        </div>
    </div>
   )
   }
}
export default TopBanner