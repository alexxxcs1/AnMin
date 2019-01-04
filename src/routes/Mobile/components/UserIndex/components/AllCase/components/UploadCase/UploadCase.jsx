import React, { Component } from "react";
import style from "./UploadCase.scss";

export class UploadCase extends Component {
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
  refreshProps(props) {}
  render() {
    return (
      <div
        className={[
          style.Button,
          "childcenter",
          "childcolumn"
        ].join(" ")}>
        <span>新增</span>
        <span>案例</span>
      </div>
    );
  }
}
export default UploadCase;
