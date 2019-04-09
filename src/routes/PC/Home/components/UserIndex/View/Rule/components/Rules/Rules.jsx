import React, { Component } from 'react'
import style from './Rules.scss'
import pcruleimage from 'assets/pcruleimage.png'
  
export class Rules extends Component {
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
    <div className={[style.Rules,'childcenter'].join(' ')}>
        <img src={pcruleimage} className={style.RuleImage} alt=""/>
    </div>
   )
   }
}
export default Rules