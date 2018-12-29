import React, { Component } from 'react'
import style from './TopBanner.scss'
import headshot from './imgs/headshot.jpg'
  
export class TopBanner extends Component {
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
    <div className={[style.TopBannerBox,'childcenter'].join(' ')}>
        <div className={[style.BannerDetial,'childcenter'].join(' ')}>
            <div className={[style.GroupBox,'childcenter','childcontentstart'].join(' ')}>
                <div className={style.TextSlogan}>2019青年讲者优秀病例征文平台</div>
            </div>
            <div className={[style.GroupBox,'childcenter','childcontentend'].join(' ')}>
                <div className={[style.UserInfo,'childcenter'].join(' ')}>
                    <div className={style.UserHeadShot}>
                        <img src={headshot} alt=""/>
                    </div>
                    <div className={style.UserName}>
                        李嘉诚
                    </div>
                    <div className={style.ExitButton}>退出</div>
                </div>
            </div>
        </div>
    </div>
   )
   }
}
export default TopBanner