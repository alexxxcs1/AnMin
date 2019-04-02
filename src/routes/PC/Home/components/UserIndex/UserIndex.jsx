import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import style from "./UserIndex.scss";
import PropTypes from "prop-types";
import {api} from 'common/app'

import AllCase from "./View/AllCase";
import ChosenCase from "./View/ChosenCase";
import Rule from "./View/Rule";

import UploadVideo from "./components/UploadVideo";
import UploadCase from "./components/UploadCase";
import VideoView from "./components/VideoView";
import AuthBox from "./components/AuthBox";

import logintitle from 'assets/logintitle.png'
import downloadbox from 'assets/downloadbox.png'
import templatedownload from 'assets/templatedownload.png'


let ADmoveInterval;
let TempalatemoveInterval;

export class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo:null,
      fileloadbox: null,
      navStatus: 2,
      ADisshow:true,
      ADposX:10,
      Template_posX:10,
      turn:false,
      template_turn:false,
      mouseEnter:false,
      mouseEnter_template:false,
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.HandleNavStatus = this.HandleNavStatus.bind(this);
    this.HandleFileLoad = this.HandleFileLoad.bind(this);
    this.HandleADshow = this.HandleADshow.bind(this);
    this.ADMoveStart = this.ADMoveStart.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
    this.getUserInfo();
    this.ADMoveStart();
    this.TemplateMoveStart();
  }
  componentWillUnmount(){
    clearInterval(ADmoveInterval);
    clearInterval(TempalatemoveInterval);
  }
  refreshProps(props) {
    let hash = window.location.hash.split("/");
    this.state.navStatus = hash[hash.length - 1];
    this.setState(this.state);
  }
  getChildContext() {
    return {
      HandleFileLoad: this.HandleFileLoad
    };
  }
  HandleNavStatus(status) {
    this.props.history.push("/pc/user/" + status);
  }
  HandleFileLoad(type) {
    if (type === null) {
      this.getUserInfo();
    }
    this.state.fileloadbox = type;
    this.setState(this.state);
  }
  getUserInfo(){
    api.getUserInfo().then(res=>{
      if (res.code === 200) {
        this.state.userinfo = res.data;
      }else{
        console.log(res.msg);
      }
      this.setState(this.state);
    },err=>{
      console.log(err);
      
    })
  }
  HandleADshow(boolean){
    this.state.ADisshow = boolean;
    if (!boolean) {
      clearInterval(ADmoveInterval);
    }
    this.setState(this.state);
  }
  ADMoveStart(){
    ADmoveInterval = setInterval(() => {
      let speed = 0.05;
      if (this.state.mouseEnter) return;
      if (this.state.turn) {
        this.state.ADposX += speed;
        if (this.state.ADposX>=90) {
          this.state.turn = !this.state.turn;
        }
      }else{
        if (this.state.ADposX<=10) {
          this.state.turn = !this.state.turn;
        }
        this.state.ADposX -= speed;
      }
      this.setState(this.state);
    }, 10);
  }
  TemplateMoveStart(){
    TempalatemoveInterval = setInterval(() => {
      let speed = 0.05;
      if (this.state.mouseEnter_template) return;
      if (this.state.template_turn) {
        this.state.Template_posX += speed;
        if (this.state.Template_posX>=90) {
          this.state.template_turn = !this.state.template_turn;
        }
      }else{
        if (this.state.Template_posX<=10) {
          this.state.template_turn = !this.state.template_turn;
        }
        this.state.Template_posX -= speed;
      }
      this.setState(this.state);
    }, 10);
  }
  isTemplateMouseEnter(boolean){
    this.state.mouseEnter_template = boolean;
    this.setState(this.state);
  }
  isADMouseEnter(boolean){
    this.state.mouseEnter = boolean;
    this.setState(this.state);
  }
  render() {
    return (
      <div className={style.UserIndexBox}>
        {this.state.fileloadbox === 1 ? <UploadCase /> : ""}
        {this.state.fileloadbox === 2 ? <UploadVideo /> : ""}
        {this.state.fileloadbox === 3 ? <VideoView video={this.state.userinfo?this.state.userinfo.video:''}/> : ""}
        {/* <AuthBox /> */}
        <div className={[style.NavBanner, "childcenter"].join(" ")}>
          <div className={[style.BannerDetial, "childcenter"].join(" ")}>
            <div
              className={[
                style.GroupBox,
                "childcenter",
                "childcontentstart"
              ].join(" ")}>
              <div className={[style.NavGroup, "childcenter"].join(" ")}>
                <div
                  onClick={this.HandleNavStatus.bind(this, "all")}
                  className={[
                    style.NavButton,
                    this.state.navStatus === "all" ? style.ActNavButton : "",
                    "childcenter"
                  ].join(" ")}>
                  所有案例
                </div>
                <div
                  onClick={this.HandleNavStatus.bind(this, "chosen")}
                  className={[
                    style.NavButton,
                    this.state.navStatus === "chosen" ? style.ActNavButton : "",
                    "childcenter"
                  ].join(" ")}>
                  入选案例
                </div>
                <div
                  onClick={this.HandleNavStatus.bind(this, "rule")}
                  className={[
                    style.NavButton,
                    this.state.navStatus === "rule" ? style.ActNavButton : "",
                    "childcenter"
                  ].join(" ")}>
                  项目介绍及规则
                </div>
              </div>
            </div>
            <div
              className={[
                style.GroupBox,
                "childcenter",
                "childcontentend"
              ].join(" ")}>
              {this.state.userinfo?<div
                className={[style.HandleButtonGroup, "childcenter"].join(" ")}>
                {this.state.userinfo.fileCount>=10?'':<div className={[style.Button, "childcenter"].join(" ")} onClick={this.HandleFileLoad.bind(this,1)}>
                  上传案例
                </div>}
                {this.state.userinfo.video?<div className={[style.Button, "childcenter"].join(" ")} onClick={this.HandleFileLoad.bind(this,3)}>
                  查看视频
                </div>:<div className={[style.Button, "childcenter"].join(" ")} onClick={this.HandleFileLoad.bind(this,2)}>
                  添加视频
                </div>}
              </div>:''}
            </div>
          </div>
        </div>

        <div
          className={[
            style.DetialBox,
            "childcenter",
            "childcolumn",
            "childcontentstart"
          ].join(" ")}>
          {this.state.ADisshow?<div onMouseLeave={this.isADMouseEnter.bind(this,false)} onMouseEnter={this.isADMouseEnter.bind(this,true)} style={{bottom:this.state.ADposX + '%'}} className={[style.ADBox,'childcenter'].join(' ')}>
            <div className={style.CloseButton} onClick={this.HandleADshow.bind(this,false)}></div>
            <div className={[style.ContentBox,'childcenter'].join(' ')} onClick={()=>{
              window.open('http://meadjohnson-qiniu.rup-china.com/meadjohnson-gz/%E5%85%A8%E5%9B%BD%E4%B8%93%E5%AE%B6%E8%AF%81%E8%A8%80%E8%A7%86%E9%A2%91final-0327.mp4');
            }}>
              {/* <img className={style.ADimage} src={logintitle} alt=""/> */}
              <img className={style.DownloadBox} src={downloadbox}></img>
            </div>
          </div>:''}
          <div 
            onClick={()=>{window.location.href = 'http://meadjohnson-qiniu.rup-china.com/meadjohnson-gz/%E7%89%9B%E5%A5%B6%E8%9B%8B%E7%99%BD%E8%BF%87%E6%95%8F%E8%AF%8A%E6%B2%BB%E6%A1%88%E4%BE%8B%E5%BE%81%E9%9B%86%28%E6%A8%A1%E6%9D%BF%EF%BC%89.pptx'}}
            onMouseLeave={this.isTemplateMouseEnter.bind(this,false)} 
            onMouseEnter={this.isTemplateMouseEnter.bind(this,true)} 
            style={{left:this.state.Template_posX + '%'}} 
            className={[style.TemplateBox,'childcenter'].join(' ')}
          >
            <img className={style.TemplateDownloadBox} src={templatedownload}></img>
          </div>
          <Switch>
            <Route path="/pc/user/all" component={AllCase} />
            <Route path="/pc/user/chosen" component={ChosenCase} />
            <Route path="/pc/user/rule" component={Rule} />
            <Redirect from="/pc/user" to="/user/rule" />
          </Switch>
        </div>
      </div>
    );
  }
}
UserIndex.childContextTypes = {
  HandleFileLoad: PropTypes.func
};
export default UserIndex;
