import React, { Component } from 'react'
import style from './AllCase.scss'
  
export class AllCase extends Component {
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
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'66%'}}>
            <input value='美赞臣安敏感·健行婴幼儿奶粉分析' className={style.ValueInput} type="text" readOnly/>
            <div className={[style.HandleButtonGroup,'childcenter','childcontentstart'].join(' ')}>
                <div >预览</div>
                <div >重新上传</div>
                <div >删除</div>
            </div>
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'17%'}}>
        <span className={style.Timespan}>2018-10-28 17:04</span> 
        </div>
        <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'17%'}}>
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
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'66%'}}>
                    名称
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'17%'}}>
                    上传时间
                    </div>
                    <div className={[style.TableColumn,'childcenter','childcontentstart'].join(' ')} style={{width:'17%'}}>
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
export default AllCase