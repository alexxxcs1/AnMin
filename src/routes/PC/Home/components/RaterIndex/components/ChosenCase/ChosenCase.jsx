import React, { Component } from 'react'
import style from './ChosenCase.scss'
import Select from 'components/Select'
import selecticon from 'assets/selecticon.png'
  
const optionname = {
    uname:'姓名',
    cname:'名称'
};
export class ChosenCase extends Component {
constructor(props) {
  super(props);
  this.state = {
    filterOption:null,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.createTableRow = this.createTableRow.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
HandleFilterOption(filterOption){
    this.state.filterOption = filterOption;
    this.setState(this.state);
}
createTableRow(){
    let result = [];
    for (let z = 0; z < 10; z++) {
        result.push(<div className={[style.TableRow,'childcenter'].join(' ')}>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'42%'}}>
            <input value='美赞臣安敏感·健行婴幼儿奶粉分析' className={style.ValueInput} type="text" readOnly/>
            <div className={[style.HandleButtonGroup,'childcenter','childcontentstart'].join(' ')}>
                <div >预览</div>
            </div>
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'24%'}}>
        <span className={style.CheckInfo}>查看详情</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'18%'}}>
        <span className={style.Timespan}>2018-10-28 17:04</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'15%'}}>
        <span className={style.Timespan}>2018-10-30 17:04</span>
        </div>
    </div>);
    }
    return result;
}
render() {
  return (
    <div className={[style.AllCaseBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
        <div className={[style.ListBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>
            <div className={[style.ListTitle,'childcenter','childcontentstart'].join(' ')}>
                <div className={style.TitleValue}>通过案例总览表</div>
                <div className={[style.TitleRight,'childcenter','childcontentend'].join(' ')}>
                    <Select Selected={ <div className={[style.SelectedValue,'childcenter'].join(' ')}>
                        <span>{this.state.filterOption?optionname[this.state.filterOption]:'全部'}</span>
                        <span className={style.dropTips}></span>
                    </div> }>
                        <div className={style.OptionBox}>
                            <div onClick={this.HandleFilterOption.bind(this,null)} className={[style.Option,this.state.filterOption == null?style.ActOption:'','childcenter'].join(' ')}>全部</div>
                            <div onClick={this.HandleFilterOption.bind(this,'uname')} className={[style.Option,this.state.filterOption == 'uname'?style.ActOption:'','childcenter'].join(' ')}>姓名</div>
                            <div onClick={this.HandleFilterOption.bind(this,'cname')} className={[style.Option,this.state.filterOption == 'cname'?style.ActOption:'','childcenter'].join(' ')}>名称</div>
                        </div>
                    </Select>
                    <div className={[style.SelectInputBox,'childcenter','childcontentend'].join(' ')}>
                        <input type="text" className={style.SelectInput}/>
                        <img src={selecticon} className={style.selecticon} alt=""/>
                    </div>
                </div>
            </div>
            <div className={[style.TableBox,'childcenter','childcolumn','childcontentstart'].join(' ')}>

                <div className={[style.TableHead,'childcenter'].join(' ')}>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'42%'}}>
                    名称
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'24%'}}>
                    评委评语
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