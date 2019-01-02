import React, { Component } from "react";
import style from "./Register.scss";
import MobileTipAlert from "components/MobileTipAlert";

import logo from "assets/logo.png";
import Success from "assets/Success.png";
import Error from "assets/Error.png";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InformedConsentStatus: false,
      RegisterResult: {
        alertshow: false,
        result: null,
        value: ""
      }
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.HandleInformedConsent = this.HandleInformedConsent.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.HandleAlertShow = this.HandleAlertShow.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
  }
  refreshProps(props) {}
  HandleInformedConsent() {
    this.state.InformedConsentStatus = !this.state.InformedConsentStatus;
    this.setState(this.state);
  }
  onInputBlur() {
    var scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
  HandleSubmit() {
    //模拟
    this.state.RegisterResult = {
      alertshow: true,
      result: Math.random() > 0.5 ? true : false,
      value: "服务器错误！"
    };

    //ajax
    this.setState(this.state);
  }
  HandleAlertShow(boolean){
      this.state.RegisterResult.alertshow = boolean;
      this.setState(this.state);
  }
  render() {
    return (
      <div className={[style.ContentBox].join(" ")}>
        {this.state.RegisterResult.alertshow?<div className={[style.FixLayer, "childcenter"].join(" ")}>
          {this.state.RegisterResult.result == true ? (
            <MobileTipAlert onClose={this.HandleAlertShow.bind(this,false)}>
              <div
                className={[
                  style.AlertInfoBox,
                  "childcenter",
                  "childcolumn"
                ].join(" ")}>
                <img src={Success} className={style.Status} alt="" />
                <div
                  className={[
                    style.TextLayer,
                    "childcenter",
                    "childcolumn"
                  ].join(" ")}>
                  <span>注册成功</span>
                  <span>正在为您跳转，请稍后</span>
                </div>
              </div>
            </MobileTipAlert>
          ) : (
            ""
          )}
          {this.state.RegisterResult.result == false ? (
            <MobileTipAlert onClose={this.HandleAlertShow.bind(this,false)}>
              <div
                className={[
                  style.AlertInfoBox,
                  "childcenter",
                  "childcolumn"
                ].join(" ")}>
                <img src={Error} className={style.Status} alt="" />
                <div
                  className={[
                    style.TextLayer,
                    "childcenter",
                    "childcolumn"
                  ].join(" ")}>
                  <span>注册失败</span>
                  <span>{this.state.RegisterResult.value}</span>
                </div>
              </div>
            </MobileTipAlert>
          ) : (
            ""
          )}
        </div>:''}
        <div
          className={[style.RegisterBox, "childcenter", "childcolumn"].join(
            " "
          )}>
          <div
            className={[style.ActTitle, "childcenter", style.textbox].join(
              " "
            )}>
            <img src={logo} className={style.logo} />
            全国婴幼儿牛奶蛋白过敏膳食管理规范化培训项目
          </div>
          <div
            className={[style.MainTitle, "childcenter", style.textbox].join(
              " "
            )}>
            2019青年讲者优秀病例征文平台
          </div>
          <div
            className={[style.Welcome, "childcenter", style.textbox].join(" ")}>
            欢迎注册
          </div>
          <div
            className={[style.InputGroup, "childcenter", "childcolumn"].join(
              " "
            )}>
            <div className={[style.InputBox, "childcenter"].join(" ")}>
              <div
                className={[
                  style.InputTitle,
                  "childcenter",
                  "childcontentstart"
                ].join(" ")}>
                姓名
              </div>
              <input
                type="text"
                className={style.Inputs}
                name=""
                id=""
                onBlur={this.onInputBlur}
              />
            </div>
            <div className={[style.InputBox, "childcenter"].join(" ")}>
              <div
                className={[
                  style.InputTitle,
                  "childcenter",
                  "childcontentstart"
                ].join(" ")}>
                省市区
              </div>
              <input
                type="text"
                className={style.Inputs}
                name=""
                id=""
                onBlur={this.onInputBlur}
              />
            </div>
            <div className={[style.InputBox, "childcenter"].join(" ")}>
              <div
                className={[
                  style.InputTitle,
                  "childcenter",
                  "childcontentstart"
                ].join(" ")}>
                手机号码
              </div>
              <input
                type="text"
                className={style.Inputs}
                name=""
                id=""
                onBlur={this.onInputBlur}
              />
            </div>
            <div className={[style.InputBox, "childcenter"].join(" ")}>
              <div
                className={[
                  style.InputTitle,
                  "childcenter",
                  "childcontentstart"
                ].join(" ")}>
                密码
              </div>
              <input
                type="text"
                className={style.Inputs}
                name=""
                id=""
                onBlur={this.onInputBlur}
              />
            </div>
            <div className={[style.InputBox, "childcenter"].join(" ")}>
              <div
                className={[
                  style.InputTitle,
                  "childcenter",
                  "childcontentstart"
                ].join(" ")}>
                邀请码
              </div>
              <input
                type="text"
                className={style.Inputs}
                name=""
                id=""
                onBlur={this.onInputBlur}
              />
            </div>
          </div>
          <div
            className={[style.InformedConsent, "childcenter"].join(" ")}
            onClick={this.HandleInformedConsent}>
            <div
              className={[
                style.CheckBox,
                this.state.InformedConsentStatus ? style.ActCheckBox : ""
              ].join(" ")}
            />
            <span className={style.text}>
              我已经阅读并同意《用户知情同意书》
            </span>
          </div>
          <div
            className={[style.RegButton, "childcenter"].join(" ")}
            onClick={this.HandleSubmit}>
            确定
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
