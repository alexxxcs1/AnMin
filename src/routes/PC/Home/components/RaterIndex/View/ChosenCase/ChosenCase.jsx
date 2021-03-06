import React, { Component } from 'react'
import style from './ChosenCase.scss'
import Select from 'components/Select'
import Burster from 'components/Burster'
import CommentBox from './components/CommentBox'
import {api} from 'common/app'
import LoadingBox from 'components/LoadingBox'
import ScoreBox from './components/ScoreBox'


import NoResult from 'assets/NoResult.png'
import selecticon from 'assets/selecticon.png'
  
const optionname = {
    name:'姓名',
    hospital:'医院',
    office:'科室'
};
export class ChosenCase extends Component {
constructor(props) {
  super(props);
  this.state = {
      filterOption:null,
      filterValue:null,
      PTOption:{
          nowpage:1,
          totalpage:1,
          init:false,
      },
      onGetData:false,
      data:[],
      CommentOption:{
          show:false,
          id:null,
          content:null,
      },
      ScoreOption:{
        show:false,
        id:null,
        scorearray:null,
      }
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.createTableRow = this.createTableRow.bind(this);
     this.submitScore = this.submitScore.bind(this);
     this.HandleSearch = this.HandleSearch.bind(this);
     this.HandleSearvhValueChange = this.HandleSearvhValueChange.bind(this);
     this.HandleCommentBox = this.HandleCommentBox.bind(this);
     this.HandleScoreBox = this.HandleScoreBox.bind(this);
     this.HandleScoreUpdate = this.HandleScoreUpdate.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.getAllCase(1,null,null);
}
refreshProps(props) {
  
}
getAllCase(page,type,search){
    this.state.onGetData = true;
    this.setState(this.state);
    api.getAllCaseByRater(page,type,search,'pass').then(res=>{
        console.log(res);
        if (res.code === 200) {
            this.state.data = res.data.list;
            this.state.PTOption.nowpage = res.data.page;
            this.state.PTOption.totalpage = res.data.num;
        }
        this.state.onGetData = false;
        this.setState(this.state);
    },err=>{
        console.log(err);
    })
}
HandleSearvhValueChange(e){
    this.state.filterValue = e.target.value;
    this.setState(this.state);
}
HandleSearch(){
    this.state.data= [];
    this.setState(this.state);
    this.getAllCase(1,this.state.filterOption,this.state.filterValue);
}
HandleFilterOption(filterOption){
    this.state.filterOption = filterOption;
    this.setState(this.state);
}
submitScore(index,e){
    // if (!this.state.data[index].sum) return;
    let _index = index;
    let self = this;
    api.setCaseScoreContent(this.state.data[index].id,1,this.state.data[index].sum).then(res=>{
        if (res.code === 200) {
            alert(res.msg)
        }else{
            self.state.data[_index].sum = res.data;
            self.setState(self.state);
                alert(res.msg)
        }
    },err=>{

    })
}
createTableRow(){
    let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.TableRow,'childcenter'].join(' ')}>
        {/* <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
        <span className={style.Timespan}>{this.state.data[z].userName}</span>
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
        <span className={style.Timespan}>{this.state.data[z].tel}</span> 
        </div> */}
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
            <span className={style.Timespan}>{z+1}</span> 
        </div> 
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'40%'}}>
            <input value={this.state.data[z].name} title={this.state.data[z].name} className={style.ValueInput} type="text" readOnly/>
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
            <div className={[style.HandleButtonGroup,'childcenter','childcontentstart'].join(' ')}>
                <a href={this.state.data[z].filePath} download target="_blank"><div >预览</div></a>
            </div>
        </div>
        {/* <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'7%'}}>
            <a href={this.state.data[z].video} target="_blank" rel="noopener noreferrer"><span className={style.CheckInfo}>查看</span></a>
        </div> */}
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'10%'}}>
            <span className={style.CheckInfo}>{this.state.data[z].sum!=null?this.state.data[z].sum:'暂无评分'}</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'10%'}}>
            <span className={style.CheckInfo} onClick={this.HandleScoreBox.bind(this,{
                    index:z,
                    show:true,
                    id:this.state.data[z].id,
                    content:this.state.data[z].may_score
                })}>点我打分</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
        {/* {this.state.data[z].content?<input value={this.state.data[z].content} title={this.state.data[z].content} className={style.CommentInput} type="text" readOnly/>:''} */}
        <span className={style.CheckInfo} onClick={this.HandleCommentBox.bind(this,{
            index:z,
            show:true,
            id:this.state.data[z].id,
            content:this.state.data[z].content
        })}>点我点评</span> 
        </div>
    </div>);
    }
    if (this.state.data.length === 0) {
        result.push( <div className={[style.NoResultBox,'childcenter childcolumn'].join(' ')}>
            <img src={NoResult} alt=""/>
            <span>暂无内容</span>
        </div> )
    }
    return result;
}
PageHandle(page){
    if(this.state.onGetData) return;
    this.state.PTOption.nowpage = page>this.state.PTOption.totalpage?this.state.PTOption.totalpage:page;
    this.setState(this.state);
    this.getAllCase(this.state.PTOption.nowpage,this.state.filterOption,this.state.filterValue);
}
HandleCommentBox(option){
    this.state.CommentOption = option;
    this.setState(this.state);
}
HandleScoreBox(option){
    this.state.ScoreOption = option;
    this.setState(this.state);
}
HandleScoreUpdate(index,scoreArray){
    this.state.data[index].may_score = scoreArray;
    this.setState(this.state);
}
HandleCommentUpdate(index,content){
    this.state.data[index].content = content;
    this.setState(this.state);
}
render() {
  return (
    <div className={[style.AllCaseBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
        {this.state.CommentOption.show?<CommentBox id={this.state.CommentOption.id} onUpdata={this.HandleCommentUpdate.bind(this,this.state.CommentOption.index)} content={this.state.CommentOption.content} handle={this.HandleCommentBox}/>:''}
        {this.state.ScoreOption.show?<ScoreBox id={this.state.ScoreOption.id} onUpdate={this.HandleScoreUpdate.bind(this,this.state.ScoreOption.index)} content={this.state.ScoreOption.content} handle={this.HandleScoreBox} />:''}
        <div className={[style.ListBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
            <div className={[style.ListTitle,'childcenter','childcontentstart'].join(' ')}>
                <div className={[style.TitleRight,'childcenter','childcontentend'].join(' ')}>
                    <Select Selected={ <div className={[style.SelectedValue,'childcenter'].join(' ')}>
                        <span>{this.state.filterOption?optionname[this.state.filterOption]:'全部'}</span>
                        <span className={style.dropTips}></span>
                    </div> }>
                        <div className={style.OptionBox}>
                            <div onClick={this.HandleFilterOption.bind(this,null)} className={[style.Option,this.state.filterOption === null?style.ActOption:'','childcenter'].join(' ')}>全部</div>
                            <div onClick={this.HandleFilterOption.bind(this,'name')} className={[style.Option,this.state.filterOption === 'name'?style.ActOption:'','childcenter'].join(' ')}>姓名</div>
                            <div onClick={this.HandleFilterOption.bind(this,'hospital')} className={[style.Option,this.state.filterOption === 'hospital'?style.ActOption:'','childcenter'].join(' ')}>医院</div>
                            <div onClick={this.HandleFilterOption.bind(this,'office')} className={[style.Option,this.state.filterOption === 'office'?style.ActOption:'','childcenter'].join(' ')}>科室</div>
                        </div>
                    </Select>
                    <div className={[style.SelectInputBox,'childcenter','childcontentend'].join(' ')}>
                        <input type="text" value={this.state.filterValue} className={style.SelectInput} onChange={this.HandleSearvhValueChange}/>
                        <img src={selecticon} className={style.selecticon} onClick={this.HandleSearch}/>
                    </div>
                </div>
            </div>
            <div className={[style.TableBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>

                <div className={[style.TableHead,'childcenter'].join(' ')}>
                    {/* <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    姓名
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
                    手机号码
                    </div> */}
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
                    序号
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'40%'}}>
                    名称
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
                    案例
                    </div>
                    {/* <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'7%'}}>
                    视频
                    </div> */}
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'10%'}}>
                    评分
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'10%'}}>
                    打分
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    点评
                    </div>
                </div>
                <div className={[style.TableBody,'childcenter childcolumn childcontentstart'].join(' ')}>
                    {this.state.onGetData?<LoadingBox />:this.createTableRow()}
                </div>
            </div>
            <div className={[style.PTBox,'childcenter childcontentend'].join(' ')}>
                <div className={[style.PTGroup,'childcenter'].join(' ')}>
                    <Burster 
                     min={1} //最小页数
                     max={this.state.PTOption.totalpage}  //最大页数
                     now={this.state.PTOption.nowpage}  //现在的页数
                     backhandle={this.PageHandle.bind(this, parseInt(this.state.PTOption.nowpage) - 1)} //后退一页function绑定
                     nexthandle={this.PageHandle.bind(this, parseInt(this.state.PTOption.nowpage) + 1)} //前进一页function绑定
                     valuehandle={this.PageHandle} //输入页数function绑定
                     />
                </div>
            </div>
        </div>
    </div>
   )
   }
}
export default ChosenCase