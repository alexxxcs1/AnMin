import React, { Component } from 'react'
import style from './CommentBox.scss'
import DarkBox from 'components/DarkBox'
import close from 'assets/close.png'
import {api} from 'common/app'

import commentbot from 'assets/commentbot.png'
import commenttop from 'assets/commenttop.png'
  
export class CommentBox extends Component {
constructor(props) {
  super(props);
  this.state = {
      id:null,
      commentValue:'',
      select:0,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.createTextHandle = this.createTextHandle.bind(this);
     this.HandleSelect = this.HandleSelect.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  this.state.id = props.id;
  this.state.commentValue = props.content;
  this.setState(this.state);
}
handleClose(){
    this.props.handle({
        show:false,
        id:null,
    })
}
createTextHandle(){
  let result = [];
  for (let z = 0; z < this.state.commentValue.length; z++) {
    const commentValue = this.state.commentValue[z];
    result.push(
      <span className={this.state.select == z?style.underline:''} onClick={this.HandleSelect.bind(this,z)}>评语{z+1}</span>
    )
  }
  return result;
}
HandleSelect(index){
  let indexs = Math.min(Math.max(0,index),this.state.commentValue.length-1);
  this.setState({
    select:indexs,
  })
}
render() {
  return (
    <DarkBox>
        <div className={style.CommentBox}>
            <img src={commenttop} className={style.CommentTopImg} alt=""/>
            <div className={style.CloseButton} onClick={this.handleClose}>
                <img src={close} alt=""/>
            </div>
            <div className={[style.DetialBox,'childcenter'].join(' ')}>
                <div className={style.DetialTextArea}>{this.state.commentValue[this.state.select]}</div>
                <div className={style.HandleBox}>
                  <div className={style.LeftArrow} onClick={this.HandleSelect.bind(this,this.state.select-1)}></div>
                  {this.createTextHandle()}
                  <div className={style.RightArrow} onClick={this.HandleSelect.bind(this,this.state.select+1)}></div>
                </div>
            </div>
            <img src={commentbot} className={style.CommentBotImg} alt=""/>
        </div>
    </DarkBox>
   )
   }
}
export default CommentBox