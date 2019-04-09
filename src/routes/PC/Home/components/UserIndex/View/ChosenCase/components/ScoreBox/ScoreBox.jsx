import React, { Component } from 'react'
import style from './ScoreBox.scss'
import DarkBox from 'components/DarkBox'
import {api} from 'common/app'
  
export class ScoreBox extends Component {
constructor(props) {
  super(props);
  this.state = {
      scoreArray:['','','','','',''],
  };
  this.refreshProps = this.refreshProps.bind(this);
  this.countScore = this.countScore.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  this.state.scoreArray = props.content?props.content:this.state.scoreArray;
  this.setState(this.state);
}
countScore(type){
    let result = 0;
    switch (type) {
        default:
        case 'all':
            for (let z = 0; z < this.state.scoreArray.length; z++) {
                let score = this.state.scoreArray[z];
                if (!isNaN(parseInt(score))) {
                    result = result + parseInt(score);
                }
            }
            break;
        case 'soap':
            for (let z = 0; z < 4; z++) {
                const score = this.state.scoreArray[z];
                if (score) {
                    result = result + parseInt(score);
                }
            }
            break;
        case 'analysis':
            let _score4 = this.state.scoreArray[4]?this.state.scoreArray[4]:0;
            let _score5 = this.state.scoreArray[5]?this.state.scoreArray[5]:0;
            result = parseInt(_score4)+parseInt(_score5);
            break;
    }
    return result;
}
render() {
  return (
    <DarkBox>
        <div className={style.ScoreBox}>
            {/* <div className={style.CloseButton} onClick={this.props.handle.bind(this,{
                    show:false,
                    content:null,
                })}></div> */}
            <div className={[style.ScoreTitle,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter'].join(' ')}>项目</div>
                <div className={[style.Rows,'childcenter'].join(' ')}>评分标准</div>
                <div className={[style.Rows,'childcenter'].join(' ')}>得分</div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>主观资料</span>
                    <span>（15分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter'} style={{width:'743px'}}>
                        <div style={{flexGrow:'1'}}>1、格式：按主要健康问题，逐一描述</div>
                        <div style={{flexGrow:'1'}}>2、主要书写内容</div>
                    </div>
                    <div className={'childcenter childcontentstart'} style={{width:'770px',flexWrap:'wrap'}}>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（1）主诉</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（2）主要症状描述、病情演变</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（3）诊治经过及结果</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（4）相关病史</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（5）家族史</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>（6）生活方式、心理及社会因素</div>
                    </div>
                    
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[0]}分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>客观检查</span>
                    <span>（10分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter childcontentstart'} style={{width:'743px'}}>
                        <div style={{width:'33%',flexShrink:'0'}}>1、体检结果</div>
                        <div style={{width:'33%',flexShrink:'0'}}>2、实验室检查及辅助检查等</div>
                        <div style={{width:'33%',flexShrink:'0'}}>3、相关心理测验等其他评估</div>
                    </div>
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[1]}分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>评价</span>
                    <span>（10分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter childcontentstart'} style={{width:'743px',flexWrap:'wrap'}}>
                        <div style={{width:'33%',flexShrink:'0'}}>1、主要诊断</div>
                        <div style={{width:'33%',flexShrink:'0'}}>2、存在的危险因素与健康问题</div>
                        <div style={{width:'33%',flexShrink:'0'}}>3、并发症或其他临床情况</div>
                        <div style={{width:'33%',flexShrink:'0'}}>4、患者的依从性</div>
                        <div style={{width:'33%',flexGrow:'1',flexShrink:'0'}}>5、家庭可利用的资源</div>
                    </div>
                    
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[2]}分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>处置计划</span>
                    <span>（15分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter childcontentstart'} style={{width:'743px'}}>
                        <div style={{width:'33%',flexShrink:'0'}}>1、进一步诊查计划</div>
                        <div style={{width:'33%',flexShrink:'0'}}>2、治疗计划</div>
                        <div style={{width:'33%',flexShrink:'0'}}>3、随访要求 </div>
                    </div>
                    <div className={'childcenter childcontentstart'} style={{width:'773px'}}>
                        <div style={{width:'26%',flexGrow:'0'}}>（1）药物治疗及相关问题</div>
                        <div style={{width:'66%',flexGrow:'1',wordBreak:'break-all'}}>（2）非药物治疗——行为干预计划、饮食、运动等健康教育指导、注意事项等。</div>
                    </div>
                    
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[3]}分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>分析</span>
                    <span>（25分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter childcontentstart'} style={{width:'100%'}}>
                        <div style={{width:'50%',flexShrink:'0'}}>1、根据病情的分析理论和循证医学依据充分、准确</div>
                        <div style={{width:'50%',flexShrink:'0'}}>2、论点明确、论据充分、分析准确、论证合理</div>
                    </div>
                    <div className={'childcenter childcontentstart'} style={{width:'100%'}}>
                        <div style={{width:'50%',flexShrink:'0'}}>3、患儿症状体征或检查结果影像资料(照片)</div>
                        <div style={{width:'50%',flexShrink:'0'}}>4、掌握坚实的基础理论和系统的专业知识</div>
                    </div>
                    
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[4]}分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter childcolumn'].join(' ')}>
                    <span>总结</span>
                    <span>（25分）</span>
                </div>
                <div className={[style.Rows,'childcenter childalignstart childcolumn'].join(' ')}>
                    <div className={'childcenter childcontentstart'} style={{width:'743px'}}>
                        <div style={{width:'33%',flexShrink:'0'}}>1、对案例理解是否透彻</div>
                        <div style={{width:'33%',flexShrink:'0'}}>2、病史陈述是否完整、准确</div>
                        <div style={{width:'33%',flexShrink:'0'}}>3、病例思考与陈述</div>
                    </div>
                </div>
                <div className={[style.Rows,'childcenter'].join(' ')}>
                    {this.state.scoreArray[5]}分
                </div>
            </div>

            <div className={[style.HandleRow,'childcenter'].join(' ')}>
                <div className={[style.CountScore,'childcenter'].join(' ')}>
                    <div className={style.ScoreType} >SOAP病例描述 <span style={{fontSize:'24px',color:'#DA4913'}}>{this.countScore('soap')}</span>  分</div>
                    <div className={style.ScoreType} >病例分析/归纳/收获/总结 <span style={{fontSize:'24px',color:'#DA4913'}}>{this.countScore('analysis')}</span>  分</div>
                    <div className={style.ScoreType} >总计 <span style={{fontSize:'24px',color:'#DA4913'}}>{this.countScore()}</span>  分</div>
                </div>
            </div>
            <div className={[style.CancelButton,'childcenter'].join(' ')} onClick={this.props.handle.bind(this,{
                    show:false,
                    content:null,
            })}>确定</div>
        </div>
    </DarkBox>
   )
   }
}
export default ScoreBox