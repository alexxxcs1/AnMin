import React, { Component } from 'react'
import style from './ChosenCase.scss'
  
export class ChosenCase extends Component {
constructor(props) {
  super(props);
  this.state = {};
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