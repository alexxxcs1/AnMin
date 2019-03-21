import React, { Component } from "react";
import style from "./ProjectInfo.scss";
import projectinfotitle from "assets/projectinfotitle.png";

export class ProjectInfo extends Component {
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
      <div className={style.ProjectInfo}>
        <div className={[style.InfoTitle, "childcenter"].join(" ")}>
          <img src={projectinfotitle} alt="" />
        </div>
        <div className={style.Content}>
          <p>
            为提高基层医生对CMPA的认识，建立新的饮食管理模式，以病例分享和指南解读等方式促进不同学科间的交流与合作，通过征集病例鼓励基层医生积极参与，支持优秀病例和学术论文发表，２０１８年由杨敏教授、盛晓阳教授负责，12位顶级专家组成学术顾问团，全国儿童消化、儿童保健、营养、免疫、儿童皮肤约60位专家共同参与，中国医师协会儿科医师分会儿童消化专业委员会联合《临床儿科杂志》主办了全国婴幼儿牛奶蛋白过敏膳食管理规范化培训项目。该项目内容包括征集婴幼儿CMPA临床病例，制定CMPA科普宣传教育工具，修定针对基层医生培训的标准化课件，线上科普宣教以及编写婴幼儿CMPA膳食管理专集等。项目以帮助CMPA患儿摆脱疾病痛苦，尽早回归正常饮食，更早吃到美味的牛奶蛋糕为宗旨，在全国范围内引起了广泛儿科医生的关注。
          </p>
          <p>
            经过2018年项目尝试和初步总结之后， 2019年启动”真知灼见－全国CMPA膳食管理案例大赛”将不再局限于纸质版的线下征集与交流，而是通过线上线下结合的方式，以选手提交视频简介，病例介绍文档，系列课程培训等多种形式增加比赛的多样性，同时增加现场分享病例选拔与晋级的环节，为青年医生提供展示和成长的平台，帮助青年医生解决CMPA诊治的问题，积累丰富的临床经验。同时，借助《临床儿科杂志》的权威性和影响力，打造新生代“网红”医生，更为青年讲者提供学术交流平台。 
          </p>
        </div>
      </div>
    );
  }
}
export default ProjectInfo;
