import React, { Component } from 'react'
import style from './Rule.scss'
import ProjectInfo from './components/ProjectInfo'
import Rules from './components/Rules'
import Videos from './components/Videos'
  
export class Rule extends Component {
constructor(props) {
  super(props);
  this.state = {
    status:null,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.createRouteComponents = this.createRouteComponents.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
createRouteComponents(){
  switch (this.state.status) {
    default:
    case 'info':
      return <ProjectInfo />;
    case 'rule':
      return <Rules />
    case 'video':
      return <Videos />
  }
}
HandleStatus(status){
  this.state.status = status;
  this.setState(this.state);
}
render() {
  return (
    <div className={[style.RuleBox,'childcenter','childcolumn'].join(' ')}>
        {/* <img src={ruletips} style={{width:'100%'}} alt=""/> */}
        <div className={[style.DetialBox,'childcenter childcontentstart'].join(' ')}>
            <div className={[style.HandleGroup,'childcenter childcolumn'].join(' ')}>
              <div onClick={this.HandleStatus.bind(this,'info')} className={[style.ButtonBox,this.state.status!='rule'&&this.state.status!='video'?'':style.Unact,'childcenter childcolumn'].join(' ')}> <span>项</span><span>目</span><span>介</span><span>绍</span></div>
              <div onClick={this.HandleStatus.bind(this,'rule')} className={[style.ButtonBox,this.state.status=='rule'?'':style.Unact,'childcenter childcolumn'].join(' ')}><span>规</span><span>则</span></div>
              <div onClick={this.HandleStatus.bind(this,'video')} className={[style.ButtonBox,this.state.status=='video'?'':style.Unact,'childcenter childcolumn'].join(' ')}><span>项</span><span>目</span><span>介</span><span>绍</span><span>视</span><span>频</span></div>
            </div>
            <div className={style.ContentBox}>
              {this.createRouteComponents()}
            </div>
        </div>
    </div>
   )
   }
}
export default Rule