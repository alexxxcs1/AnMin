import React, { Component } from 'react'
import style from './ScoreBox.scss'
import DarkBox from 'components/DarkBox'
import {api} from 'common/app'

import scoreBasis1 from 'assets/scoreBasis1.jpg'
import scoreBasis2 from 'assets/scoreBasis2.jpg'
import scoreBasis3 from 'assets/scoreBasis3.jpg'
import scoreBasis4 from 'assets/scoreBasis4.jpg'
import scoreBasis5 from 'assets/scoreBasis5.jpg'
import scoreBasis6 from 'assets/scoreBasis6.jpg'
  
export class ScoreBox extends Component {
constructor(props) {
  super(props);
  this.state = {
      id:null,
      scoreArray:['','','','','',''],
  };
  this.refreshProps = this.refreshProps.bind(this);
  this.HandleScoreInput = this.HandleScoreInput.bind(this);
  this.countScore = this.countScore.bind(this);
  this.SubmitScore = this.SubmitScore.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  this.state.id = props.id?props.id:this.state.id;
  this.state.scoreArray = props.content?props.content:this.state.scoreArray;
  console.log(this.state.scoreArray);
  
  this.setState(this.state);
}
HandleScoreInput(index,max,e){
    e.target.value = e.target.value.replace(/[^0-9]+/, "");
    if (e.target.value.length >= 2) {
      e.target.value = e.target.value.slice(0, 2);
      e.target.value = Math.min(e.target.value,max)
      this.state.scoreArray[index] = e.target.value;
    }else{
        if (e.target.value.length == 1) {
            e.target.value = Math.max(e.target.value,1);
        }
        this.state.scoreArray[index] = e.target.value;
    }
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
SubmitScore(){
    let allfill = true;
    for (let z = 0; z < this.state.scoreArray.length; z++) {
        if (isNaN(parseInt(this.state.scoreArray[z]))) {
            allfill = false;
        }
    }
    if (allfill) {
        let sum = this.countScore();
        api.setCaseScoreContent(this.state.id,1,sum,this.state.scoreArray.toString()).then(res=>{
            console.log(res);
            if (res.code == 200) {
                alert('打分成功');
                this.props.onUpdate(this.state.scoreArray);
            }else{
                alert(res.msg)
            }
            this.props.handle({
                show:false,
                id:null,
                content:null,
            })
        },err=>{
            this.props.handle({
                show:false,
                id:null,
                content:null,
            })
        })
    }else{
        alert('请填写所有打分项再提交！')
    }
}
render() {
  return (
    <DarkBox>
        <div className={style.ScoreBox}>
            <div className={[style.ScoreTitle,'childcenter'].join(' ')}>
                <div className={[style.Rows,'childcenter'].join(' ')}>项目</div>
                <div className={[style.Rows,'childcenter'].join(' ')}>评分标准</div>
                <div className={[style.Rows,'childcenter'].join(' ')}>得分</div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis1} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[0]} placeholder={'1-15'} onChange={this.HandleScoreInput.bind(this,0,15)}/>
                    </div>
                    分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis2} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[1]} placeholder={'1-10'} onChange={this.HandleScoreInput.bind(this,1,10)}/>
                    </div>
                    分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis3} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[2]} placeholder={'1-10'} onChange={this.HandleScoreInput.bind(this,2,10)}/>
                    </div>
                    分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis4} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[3]} placeholder={'1-15'} onChange={this.HandleScoreInput.bind(this,3,15)}/>
                    </div>
                    分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis5} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[4]} placeholder={'1-25'} onChange={this.HandleScoreInput.bind(this,4,25)}/>
                    </div>
                    分
                </div>
            </div>
            <div className={[style.ScoreContent,'childcenter'].join(' ')}>
                <div className={style.ImageRow}>
                    <img src={scoreBasis6} className={style.ScoreBasis} alt=""/>
                </div>
                <div className={[style.ScoreRows,'childcenter'].join(' ')}>
                    <div className={style.ScoreInput}>
                        <input type="text" value={this.state.scoreArray[5]} placeholder={'1-25'} onChange={this.HandleScoreInput.bind(this,5,25)}/>
                    </div>
                    分
                </div>
            </div>

            <div className={[style.HandleRow,'childcenter'].join(' ')}>
                <div className={[style.CountScore,'childcenter childalignend'].join(' ')}>
                    <div className={[style.ScoreGroup,'childcenter'].join(' ')} style={{width:'50%'}}>
                        <div className={style.ScoreType} >SOAP病例描述 <span style={{fontSize:'24px',color:'#DA4913'}}>{this.countScore('soap')}</span>  分</div>
                        <div className={style.ScoreType} >病例分析/归纳/收获/总结 <span style={{fontSize:'24px',color:'#DA4913'}}>{this.countScore('analysis')}</span>  分</div>
                    </div>
                    <div className={[style.ScoreGroup,'childcenter'].join(' ')} style={{width:'50%'}}>
                        <div className={style.ScoreType} >总计 <span style={{fontSize:'36px',fontWeight:'bold',color:'#DA4913'}}>{this.countScore()}</span>  分</div>
                    </div>
                </div>
                <div className={[style.SubmitButton,'childcenter'].join(' ')} onClick={this.SubmitScore}>确认</div>
                <div className={[style.CancelButton,'childcenter'].join(' ')} onClick={this.props.handle.bind(this,{
                    show:false,
                    id:null,
                    content:null,
                })}>取消</div>
            </div>
        </div>
    </DarkBox>
   )
   }
}
export default ScoreBox