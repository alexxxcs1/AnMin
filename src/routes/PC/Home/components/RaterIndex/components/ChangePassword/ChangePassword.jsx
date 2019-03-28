import React, { Component } from 'react'
import style from './ChangePassword.scss'
import DarkBox from 'components/DarkBox'
import {api} from 'common/app'

import changepwbottom from 'assets/changepwbottom.png'
  
export class ChangePassword extends Component {
constructor(props) {
  super(props);
  this.state = {
      formdata:{
        oldpassword:'',
        newpassword:'',
        password:'',
      }
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.onFormInputChange = this.onFormInputChange.bind(this);
     this.ChangeConfirm = this.ChangeConfirm.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
onFormInputChange(type,e){
    this.state.formdata[type] = e.target.value;
    this.setState(this.state);
}
ChangeConfirm(){
    if (this.state.formdata.oldpassword&&this.state.formdata.newpassword&&this.state.formdata.password) {
        if (this.state.formdata.newpassword !== this.state.formdata.password) {
            alert('新密码和确认密码不一致');
            return;
        }
        api.raterChangePassword(
            this.state.formdata.oldpassword,
            this.state.formdata.newpassword,
            this.state.formdata.password
        ).then(res=>{
            console.log(res);
            if (res.code === 200) {
                window.location.hash = '/login'
            }
            alert(res.msg);
        },err=>{
            console.log(err);
            
        })
    }else{
        alert('请确认所有信息填写完整');
    }
    
}
render() {
  return (
    <DarkBox >
        <div className={style.ChangePasswordForm}>
            <div className={[style.TopBox,'childcenter'].join(' ')}>
                修改密码
            </div>
            <div className={style.FormBody}>
                <div className={style.FormInputGroup}>
                    <div className={[style.RowBox,'childcenter'].join(' ')}>
                        <div className={[style.RowName,'childcenter childcontentend'].join(' ')}>原密码：</div>
                        <div className={style.RowInput}>
                            <input type="password" value={this.state.formdata.oldpassword} onChange={this.onFormInputChange.bind(this,'oldpassword')}/>
                        </div>
                    </div>
                    <div className={[style.RowBox,'childcenter'].join(' ')}>
                        <div className={[style.RowName,'childcenter childcontentend'].join(' ')}>新密码： </div>
                        <div className={style.RowInput}>
                            <input type="password" value={this.state.formdata.newpassword} onChange={this.onFormInputChange.bind(this,'newpassword')}/>
                        </div>
                    </div>
                    <div className={[style.RowBox,'childcenter'].join(' ')}>
                        <div className={[style.RowName,'childcenter childcontentend'].join(' ')}>确认密码：</div>
                        <div className={style.RowInput}>
                            <input type="password" value={this.state.formdata.password} onChange={this.onFormInputChange.bind(this,'password')}/>
                        </div>
                    </div>
                </div>
                <div className={[style.SubmitButton,'childcenter'].join(' ')} onClick={this.ChangeConfirm}>确认</div>
            </div>
            <div className={style.BottomBox}>
                <img src={changepwbottom} alt=""/>
            </div>
        </div>
    </DarkBox>
   )
   }
}
export default ChangePassword