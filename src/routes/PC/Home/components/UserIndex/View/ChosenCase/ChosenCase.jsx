import React, { Component } from 'react'
import style from './ChosenCase.scss'
import {api} from 'common/app'
import CommentBox from './components/CommentBox'
import ScoreBox from './components/ScoreBox'
  
export class ChosenCase extends Component {
constructor(props) {
  super(props);
  this.state = {
    data:[],
    CommentOption:{
        show:false,
        id:null,
        content:null,
    },
    ScoreOption:{
        show:false,
        content:null,
    }
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.createTableRow = this.createTableRow.bind(this);
     this.getCaseList = this.getCaseList.bind(this);
     this.HandleCommentBox = this.HandleCommentBox.bind(this);
     this.HandleScoreBox = this.HandleScoreBox.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getCaseList();
}
refreshProps(props) {
  
}
HandleCommentBox(option){
    this.state.CommentOption = option;
    this.setState(this.state);
}
getCaseList(){
    api.getChosenCase().then(res=>{
        console.log(res);
        if (res.code === 200) {
            this.state.data = res.data?res.data:[];
        }else{
            alert(res.msg)
        }
        this.setState(this.state);
    },err=>{

    })
}
createTableRow(){
    let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.TableRow,'childcenter'].join(' ')}>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'30%'}}>
            <input value={this.state.data[z].name} className={style.ValueInput} type="text" readOnly/>
            
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
            <span className={style.CheckInfo} onClick={()=>{
                window.open(this.state.data[z].filePath);
            }}>预览</span>
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
        {this.state.data[z].content?<span className={style.CheckInfo} onClick={this.HandleCommentBox.bind(this,{
            show:true,
            id:this.state.data[z].id,
            content:this.state.data[z].content
        })}>查看详情</span>:'暂无评语'}
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
            {this.state.data[z].sum?<span className={style.CheckInfo} onClick={this.HandleScoreBox.bind(this,{
            show:true,
            content:this.state.data[z].may_score
        })}>{this.state.data[z].sum}</span>:'暂无评分'}
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'18%'}}>
        <span className={style.Timespan}>{new Date(this.state.data[z].created_at*1000).format('yyyy-MM-dd hh:mm')}</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'15%'}}>
        <span className={style.Timespan}>{new Date(this.state.data[z].updated_at*1000).format('yyyy-MM-dd hh:mm')}</span>
        </div>
    </div>);
    }
    return result;
}
HandleScoreBox(option){
    this.state.ScoreOption = option;
    this.setState(this.state);
}
render() {
  return (
    <div className={[style.AllCaseBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
        {this.state.ScoreOption.show?<ScoreBox content={this.state.ScoreOption.content} handle={this.HandleScoreBox}/>:''}
        {this.state.CommentOption.show?<CommentBox id={this.state.CommentOption.id} content={this.state.CommentOption.content} handle={this.HandleCommentBox}/>:''}
        <div className={[style.ListBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
        
            <div className={[style.TableBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>

                <div className={[style.TableHead,'childcenter'].join(' ')}>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'30%'}}>
                    名称
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    案例
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    评委评语
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    评委评分
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'18%'}}>
                    上传时间
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'15%'}}>
                    更新时间
                    </div>
                </div>
                <div className={style.TableBody}>
                    {this.createTableRow()}
                </div>
            </div>

        </div>
    </div>
   )
   }
}
export default ChosenCase