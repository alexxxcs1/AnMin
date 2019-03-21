import React, { Component } from 'react'
import style from './Rules.scss'
  
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
        <div className={style.RuleColumn}>
            <div className={style.RuleRow}>
                <div className={style.RowTitle}>大赛时间：</div>
                <div className={style.RowContent}>
                    <p>2019年4月-12月</p> 
                </div>
            </div>
            <div className={style.CutRow}></div>
            <div className={style.RuleRow}>
                <div className={style.RowTitle}>覆盖科室及医生：</div>
                <div className={style.RowContent}>
                    <p>儿科、儿保、儿消化、营养、免疫科等一线临床医生</p> 
                </div>
            </div>
            <div className={style.CutRow}></div>
            <div className={style.RuleRow}>
                <div className={style.RowTitle}>征集病例要求：</div>
                <div className={style.RowContent}>
                    <p>全国范围内征集婴幼儿牛奶蛋白过敏及膳食管理相关诊疗案例</p> 
                </div>
            </div>
            <div className={style.CutRow}></div>
            <div className={style.RuleRow} style={{borderBottom:'none'}}>
                <div className={style.RowTitle}>参赛方式：</div>
                <div className={style.RowContent}>
                
                <p>报名成功后，专家组成员推荐或个人参赛选手在线上平台投稿参赛</p> 
                    <ul>
                        <li>• 上传视频要求：</li> 
                        <li>文件格式不限，扩展名MP4 WMA MOV均可，限时30秒</li> 
                        <li>文件命名要求：文件名+日期（自动生成）</li> 
                        <li>• 上传病例要求：</li> 
                        <li>只支持扩展名.pdf文件，文件大小不超过30M</li> 
                        <li>文件命名要求：文件名+日期（自动生成）</li> 
                    </ul>
                
                </div>
            </div>
        </div>
        <div className={style.RuleColumn}>
            
            <div className={style.RuleRow}>
            <div className={style.RowTitle}>比赛规则：</div>
                <div className={style.RowContent}>
                <ul style={{textIndent:'30px'}}>
                    <li>• 由专家组在线甄选100位选手(青年讲者) ，点评及筛选优秀案例，晋级64名选手参与区域病例演讲比赛活动； </li> 
                    <li>• 区域邀请入围选手参与区域学术会议进行分享及演练，邀请专家现场带教(点评)。分8场区域选拔赛，每场晋级1位选手</li> 
                    <li>• 入围半决赛8位选手参与2019年儿科年会”真知灼见－全国CMPA膳食管理案例大赛”“网红讲师”签约仪式根据病例提供优秀稿件支持合作发表机会</li> 
                    <li>• 总决赛初定于2019年10月全国儿科年会期间，由专家及现场专业听众评出大赛冠亚季军，并获得大会嘉奖。</li> 
                </ul>
                </div>
            </div>
            <div className={style.CutRow}></div>
        </div>
    </div>
   )
   }
}
export default Rules