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
  
}
HandleNavStatus(status){
    switch (status) {
        case 0:
            this.props.history.push('/user/all');
            break;
        case 1:
            this.props.history.push('/user/chosen');
            break;
        case 2:
            this.props.history.push('/user/rule');
            break;
    }
    this.state.navStatus = status;
    this.setState(this.state);
}
render() {
  return (
    <div className={style.UserIndexBox}>
        <div className={[style.NavBanner,'childcenter'].join(' ')}>
            <div className={[style.BannerDetial,'childcenter'].join(' ')}>
                <div className={[style.GroupBox,'childcenter','childcontentstart'].join(' ')}>
                    <div className={[style.NavGroup,'childcenter'].join(' ')}>
                        <div onClick={this.HandleNavStatus.bind(this,0)} className={[style.NavButton,this.state.navStatus == 0?style.ActNavButton:'','childcenter'].join(' ')}>所有案例</div>
                        <div onClick={this.HandleNavStatus.bind(this,1)} className={[style.NavButton,this.state.navStatus == 1?style.ActNavButton:'','childcenter'].join(' ')}>入选案例</div>
                        <div onClick={this.HandleNavStatus.bind(this,2)} className={[style.NavButton,this.state.navStatus == 2?style.ActNavButton:'','childcenter'].join(' ')}>活动规则</div>
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
                <Route path='/user/all' component={AllCase} />
                <Route path='/user/chosen' component={ChosenCase} />
                <Route path='/user/rule' component={Rule} />
            </Switch>
        </div>

    </div>
   )
   }
}
export default UserIndex