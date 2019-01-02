import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import style from './UserIndex.scss'

import AllCase from './components/AllCase'
import ChosenCase from './components/ChosenCase'
import Rule from './components/Rule'
  
import topbg from 'assets/topbg.png'

export class UserIndex extends Component {
constructor(props) {
  super(props);
  this.state = {
      navStatus:2,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.HandleNavStatus = this.HandleNavStatus.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
    let hash = window.location.hash.split('/');
    this.state.navStatus = hash[hash.length-1];
    this.setState(this.state);
}
HandleNavStatus(status){
    this.props.history.push('/pc/user/'+status);
}
render() {
  return (
    <div className={style.UserIndexBox}>
        <div className={[style.NavBanner,'childcenter'].join(' ')}>
            <div className={[style.BannerDetial,'childcenter'].join(' ')}>
                <div className={[style.GroupBox,'childcenter','childcontentstart'].join(' ')}>
                    <div className={[style.NavGroup,'childcenter'].join(' ')}>
                        <div onClick={this.HandleNavStatus.bind(this,'all')} className={[style.NavButton,this.state.navStatus == 'all'?style.ActNavButton:'','childcenter'].join(' ')}>所有案例</div>
                        <div onClick={this.HandleNavStatus.bind(this,'chosen')} className={[style.NavButton,this.state.navStatus == 'chosen'?style.ActNavButton:'','childcenter'].join(' ')}>入选案例</div>
                        <div onClick={this.HandleNavStatus.bind(this,'rule')} className={[style.NavButton,this.state.navStatus == 'rule'?style.ActNavButton:'','childcenter'].join(' ')}>活动规则</div>
                    </div>
                </div>
                <div className={[style.GroupBox,'childcenter','childcontentend'].join(' ')}>

                    <div className={[style.HandleButtonGroup,'childcenter'].join(' ')}>
                        <div className={[style.Button,'childcenter'].join(' ')}>上传案例</div>
                        <div className={[style.Button,'childcenter'].join(' ')}>添加视频</div>
                    </div>

                </div>
            </div>
        </div>

        <div className={[style.DetialBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
            <img src={topbg} className={style.Topbkg} alt=""/>
            {/* <AllCase /> */}
            <Switch>
                <Route path='/pc/user/all' component={AllCase} />
                <Route path='/pc/user/chosen' component={ChosenCase} />
                <Route path='/pc/user/rule' component={Rule} />
                <Redirect from="/pc/user" to="/user/rule" />
            </Switch>
        </div>

    </div>
   )
   }
}
export default UserIndex