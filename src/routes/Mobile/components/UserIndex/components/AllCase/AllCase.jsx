import React, { Component } from 'react'
import style from './AllCase.scss'



let scrollbuttontimers;
let timers;
let onHandleScroll = false;
export class AllCase extends Component {
constructor(props) {
  super(props);
  this.state = {
      scrollButton:false,
      scrollTopInterval:null,
      HandleButtonShow:true,
      data:[],
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.getData = this.getData.bind(this);
     this.pushData = this.pushData.bind(this);
     this.createList = this.createList.bind(this);
     this.setScrollListener = this.setScrollListener.bind(this);
     this.ShowHandleButton = this.ShowHandleButton.bind(this);
     this.ScrolltoTop = this.ScrolltoTop.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getData();
  this.refs.scrollbody.addEventListener('scroll',this.setScrollListener);
  this.refs.scrollbody.addEventListener('touchmove',this.onTouchmove,{
    passive: false //  禁止 passive 效果
  });
}
refreshProps(props) {
    this.refs.scrollbody.scrollTop = 0;
    clearInterval(this.scrollTopInterval);
    onHandleScroll = false;
    clearInterval(this.scrollTopInterval);
}
setScrollListener(e){
    if ((e.currentTarget.clientHeight+e.currentTarget.scrollTop+50) > e.currentTarget.scrollHeight) {
        clearTimeout(timers)
        let self = this;
        timers=setTimeout(() => {
            self.pushData();
        }, 300);
    }
    if (e.currentTarget.scrollTop>100) {
        clearTimeout(scrollbuttontimers);
        let self = this;
        scrollbuttontimers = setTimeout(() => {
            self.setState({
                scrollButton:true,
            })
        }, 100);
    }else{
        clearTimeout(scrollbuttontimers);
        let self = this;
        scrollbuttontimers = setTimeout(() => {
            self.setState({
                scrollButton:false,
            })
        }, 100);
    }
    
}
getData(){
    for (let z = 0; z < 10; z++) {
        this.state.data.push({
            id:z,
            title:'美赞臣安敏感·健行婴幼儿奶粉分析美赞臣安敏感·健行婴幼儿奶粉分析',
            updatetime:'2018-10-31 21:04',
        });
    }
    this.setState(this.state);
}
pushData(){
    let result = [];
    for (let z = 0; z < 10; z++) {
        result.push({
            id:z,
            title:'美赞臣安敏感·健行婴幼儿奶粉分析美赞臣安敏感·健行婴幼儿奶粉分析',
            updatetime:'2018-10-31 21:04',
        })
    }
    this.state.data.push(...result);
    this.setState(this.state);
}
createList(){
    let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.CaseCard,'childcenter','childcolumn','childalignstart'].join(' ')}>
        <div className={style.CaseTitle}> {z} 美赞臣安敏感·健行婴幼儿奶粉分析美赞臣安敏感·健行婴幼儿奶粉分析</div>
        <div className={style.CaseUpdateTime}>更新时间：2018-10-31 21:04</div>
        <div className={'flexbox'}></div>
        <div className={[style.ButtonGroup,'childcenter','childcontentstart'].join(' ')}>
            <div className={[style.HandleButton,style.Colorful,'childcenter'].join(' ')}>查看案例</div>
            <div className={[style.HandleButton,'childcenter'].join(' ')}>重新上传</div>
            <div className={[style.HandleButton,'childcenter'].join(' ')}>删除</div>
        </div>
    </div>)
    }
    return result;
}
ShowHandleButton(){
    this.state.HandleButtonShow = !this.state.HandleButtonShow;
    this.setState(this.state);
}
ScrolltoTop(){
    clearInterval(this.scrollTopInterval);
    this.scrollTopInterval = setInterval(() => {
        onHandleScroll = true;
        this.refs.scrollbody.scrollTop = this.refs.scrollbody.scrollTop * 0.9;
        if (this.refs.scrollbody.scrollTop<=1) {
            this.refs.scrollbody.scrollTop = 0;
            clearInterval(this.scrollTopInterval);
            onHandleScroll = false;
        }
    }, 10);
    // this.refs.scrollbody.scrollTop = 0;
}
onTouchmove(event){
    if (onHandleScroll) {
        event.preventDefault();
    }
}
componentWillUnmount(){
    clearInterval(this.scrollTopInterval);
}
render() {
  return (
    <div className={style.ListBox} ref={'scrollbody'}>
        <div className={[style.ListBody,'childcenter','childcolumn'].join(' ')}>
            {this.state.data.length == 0?'这里什么都没有，快去投稿吧！':this.createList()}
        </div>
        
        <div className={[style.HandleGroupBox,'childcenter'].join(' ')}>
            <div className={this.state.HandleButtonShow?style.HandleButtonHide:style.HandleButtonShow} onClick={this.ShowHandleButton}></div>
            <div className={[style.Button,this.state.HandleButtonShow?'':style.hidden,'childcenter','childcolumn'].join(' ')}>
                <span>新增</span>
                <span>案例</span>
            </div>
            <div className={[style.Button,this.state.HandleButtonShow?'':style.hidden,'childcenter','childcolumn'].join(' ')}>
                <span>上传</span>
                <span>视频</span>
            </div>
            {this.state.scrollButton?<div className={style.ScrollToTop} onClick={this.ScrolltoTop}></div>:''}
        </div>
    </div>
   )
   }
}
export default AllCase