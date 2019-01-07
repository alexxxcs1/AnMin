import React, { Component } from 'react'
import DarkBox from "components/DarkBox";
import style from './VideoView.scss'
  
export class VideoView extends Component {
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
    <DarkBox>
        <div className={style.VideoViewBox}></div>
    </DarkBox>
   )
   }
}
export default VideoView