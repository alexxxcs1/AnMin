import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import {api} from 'common/app'
import style from './RaterIndex.scss'

import AllCase from './View/AllCase'
import ChosenCase from './View/ChosenCase'
import Featured from './View/Featured'
import AuthBox from './components/AuthBox'
import ChangePassword from './components/ChangePassword'
  
import topbg from 'assets/topbg.png'

export class RaterIndex extends Component {
constructor(props) {
  super(props);
  this.state = {
      navStatus:0,
      userinfo:null,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.HandleNavStatus = this.HandleNavStatus.bind(this);
     this.getRaterInfo = this.getRaterInfo.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getRaterInfo();
}
refreshProps(props) {
    let hash = window.location.hash.split('/');
    this.state.navStatus = hash[hash.length-1];
    this.setState(this.state);
}
HandleNavStatus(status){
    this.props.history.push('/pc/rateruser/'+status);
}
getRaterInfo(){
    api.getRaterInfo().then(res=>{
        if (res.code === 200) {
          this.state.userinfo = res.data;
          switch (this.state.userinfo.status) {
            case 1:
              window.location.hash = '#/pc/rateruser/chosen';
              break;
            case 2:
              window.location.hash = '#/pc/rateruser/all';
              break;
          }
        }else{
          console.log(res.msg);
        }
        this.setState(this.state);
      },err=>{
        console.log(err);
      });
}
render() {
  return (
    <div className={style.UserIndexBox}>
        <AuthBox />
        {this.state.userinfo?(this.state.userinfo.IsNeedChangePassW==0?<ChangePassword />:''):''}
        <div className={[style.NavBanner,'childcenter'].join(' ')}>
            <div className={[style.BannerDetial,'childcenter'].join(' ')}>
                <div className={[style.GroupBox,'childcenter','childcontentstart'].join(' ')}>
                    {this.state.userinfo?<div className={[style.NavGroup,'childcenter'].join(' ')}>
                        {this.state.userinfo.status == 2 ?<div onClick={this.HandleNavStatus.bind(this,'all')} className={[style.NavButton,this.state.navStatus === 'all'?style.ActNavButton:'','childcenter'].join(' ')}>所有案例</div>:''}
                        {this.state.userinfo.status == 1 ?<div onClick={this.HandleNavStatus.bind(this,'chosen')} className={[style.NavButton,this.state.navStatus === 'chosen'?style.ActNavButton:'','childcenter'].join(' ')}>入选案例</div>:''}
                        {/* <div onClick={this.HandleNavStatus.bind(this,'featured')} className={[style.NavButton,this.state.navStatus === 'featured'?style.ActNavButton:'','childcenter'].join(' ')}>精选案例</div> */}
                    </div>:""}
                </div>
                <div className={[style.GroupBox,'childcenter','childcontentend'].join(' ')}>

                    {/* <div className={[style.HandleButtonGroup,'childcenter'].join(' ')}>
                        <div className={[style.Button,'childcenter'].join(' ')}>上传案例</div>
                        <div className={[style.Button,'childcenter'].join(' ')}>添加视频</div>
                    </div> */}

                </div>
            </div>
        </div>

        <div className={[style.DetialBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
            {/* <AllCase /> */}
            <Switch>
                <Route path='/pc/rateruser/all' component={AllCase} />
                <Route path='/pc/rateruser/chosen' component={ChosenCase} />
                {/* <Route path='/pc/rateruser/featured' component={Featured} /> */}
                <Redirect from="/pc/rateruser" to="/pc/rateruser/all" />
            </Switch>
        </div>

    </div>
   )
   }
}
export default RaterIndex