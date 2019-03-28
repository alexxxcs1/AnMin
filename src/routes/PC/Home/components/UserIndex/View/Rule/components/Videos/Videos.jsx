import React, { Component } from 'react'
import style from './Videos.scss'
  
export class Videos extends Component {
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
    <div className={[style.Videos,'childcenter'].join(' ')}>
        <div className={style.VideoBox}>
            <video className={style.videos} src="http://meadjohnson-qiniu.rup-china.com/meadjohnson-gz/%E5%85%A8%E5%9B%BD%E4%B8%93%E5%AE%B6%E8%AF%81%E8%A8%80%E8%A7%86%E9%A2%91final-0327.mp4" autoPlay controls></video>
        </div>
    </div>
   )
   }
}
export default Videos