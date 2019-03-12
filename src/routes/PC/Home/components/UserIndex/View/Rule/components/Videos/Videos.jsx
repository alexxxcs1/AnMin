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
            <video className={style.videos} src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoPlay controls></video>
        </div>
    </div>
   )
   }
}
export default Videos