import React, { Component } from 'react'
import style from './AllCase.scss'
import PropTypes from "prop-types";
import Select from 'components/Select'
import LoadingBox from 'components/LoadingBox'
import Burster from 'components/Burster'
import {api} from 'common/app'

import selecticon from 'assets/selecticon.png'
import NoResult from 'assets/NoResult.png'
const optionname = {
    name:'姓名',
    hospital:'医院',
    office:'科室'
};
export class AllCase extends Component {
constructor(props) {
  super(props);
  this.state = {
      filterOption:null,    //选中的筛选值 (下拉框)
      filterValue:null,    //搜索的值
      PTOption:{    //分页器配置
          nowpage:1, //当前页
          totalpage:1,  //总页数
      },
      onGetData:false,  //是否正在通过ajax拉取数据中
      data:[]   //案例数据数组
  };
  this.refreshProps = this.refreshProps.bind(this);
  this.getAllCase = this.getAllCase.bind(this);
  this.createTableRow = this.createTableRow.bind(this); //渲染案例数组方法
  this.HandleFilterOption = this.HandleFilterOption.bind(this); //控制筛选值
  this.HandleSearvhValueChange = this.HandleSearvhValueChange.bind(this); //控制搜索值
  this.HandleSearch = this.HandleSearch.bind(this); //控制开始搜索
  this.PageHandle = this.PageHandle.bind(this); //控制分页器页数
  this.HandleCasePass = this.HandleCasePass.bind(this); //控制是否通过案例
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
getAllCase(page,type,search){   //获取所有数据
    this.state.onGetData = true;
    this.setState(this.state);
    api.getAllCaseByRater(page,type,search,'all').then(res=>{ //获取所有数据接口
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
HandleCasePass(id,status,index){
    let text = status===2?'确定审核通过吗？':'确定审核不通过吗？';
    let self = this;
    //this.context.HandleAlertOption父组件传进来的方法，控制父组件的弹窗组件。
    this.context.HandleAlertOption(true,{
        Value:text, //弹窗显示的值
        Cancle:()=>{    //配置当弹窗关闭时
            this.context.HandleAlertOption(false,null)
        },
        Submit:()=>{    //配置当弹窗确定时
            api.getCasePase(id,status).then(res=>{
                if (res.code === 200) {
                    self.state.data[index].status = status;
                }else{
                    alert(res.msg)
                }
                self.context.HandleAlertOption(false,null)
                self.setState(self.state)
            },err=>{
        
            })
        }
    })
    
}
createTableRow(){
    let result = [];
    for (let z = 0; z < this.state.data.length; z++) {
        result.push(<div className={[style.TableRow, 'childcenter'].join(' ')}>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '11%' }}>
                <span className={style.Timespan}>{this.state.data[z].userName}</span>
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '14%' }}>
                <span className={style.Timespan}>{this.state.data[z].tel}</span>
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '25%' }}>
                <input value={this.state.data[z].name} title={this.state.data[z].name} className={style.ValueInput} readOnly />
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '15%' }}>
                <a href={this.state.data[z].filePath} download target="_blank"><div>预览</div></a>
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '10%' }}>
                {this.state.data[z].video?<a href={this.state.data[z].video} target="_blank" rel="noopener noreferrer"><span className={style.Timespan} style={{ textDecoration: 'underline' }}>查看</span></a>:''}
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '12%' }}>
                <span className={style.Timespan}>{this.state.data[z].status === 1 ? '待审核' : (this.state.data[z].status === 2 ? '已审核' : '审核未通过')}</span>
            </div>
            <div className={[style.TableColumn, 'childcenter', 'childcontentstart'].join(' ')} style={{ width: '13%' }}>
                <p className={style.HandlePassButton}>
                    <span onClick={this.HandleCasePass.bind(this, this.state.data[z].id, 2, z)}>
                        通过
                </span>
                    |
                <span onClick={this.HandleCasePass.bind(this, this.state.data[z].id, 3, z)}>
                        不通过
                </span>
                </p>
                {/* <div onClick={this.HandleCasePass.bind(this,this.state.data[z].id,2,z)} className={[style.HandlePassButton,'childcenter'].join(' ')} style={{textIndent:'0px'}}>通过</div>
            <div className={style.line}></div>
            <div onClick={this.HandleCasePass.bind(this,this.state.data[z].id,3,z)} className={[style.HandlePassButton,'childcenter'].join(' ')} style={{textIndent:'0px'}}>不通过</div> */}
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
HandleFilterOption(filterOption){
    this.state.filterOption = filterOption;
    this.setState(this.state);
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
PageHandle(page){
    if(this.state.onGetData) return;
    this.state.PTOption.nowpage = page>this.state.PTOption.totalpage?this.state.PTOption.totalpage:page;
    this.setState(this.state);
    this.getAllCase(this.state.PTOption.nowpage,this.state.filterOption,this.state.filterValue);
}
render() {
  return (
    <div className={[style.AllCaseBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
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
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'11%'}}>
                    姓名
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'14%'}}>
                    手机号码
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'25%'}}>
                    名称
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'15%'}}>
                    案例
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'10%'}}>
                    视频
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'12%'}}>
                    审核状态
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'13%'}}>
                    审核
                    </div>
                </div>
                <div className={[style.TableBody,'childcenter','childcolumn','childcontentstart'].join(' ')}>
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
AllCase.contextTypes = {
    HandleAlertOption: PropTypes.func
};
export default AllCase