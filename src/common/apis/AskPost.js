import qs from 'qs';
const AskPost = (ajaxinstance) => {
    const customer = {}
    //获取用户信息 
    customer.getUserInfo = () => {
      return ajaxinstance.post('users/getUsersInfo');
    }  
    //上传案例
    customer.uploadCase = (formdata) => {
        return ajaxinstance.post('upload/Upload',formdata);
      }
    //重新上传案例
    customer.reuploadCase = (formdata) => {
      return ajaxinstance.post('upload/ReUpload',formdata);
    }
    //删除案例
    customer.deleteCase = (id) => {
      return ajaxinstance.post('upload/DelResource',qs.stringify({
        id
      }));
    }      
    //上传视频      
    customer.uploadVideo = (formdata) => {
        return ajaxinstance.post('upload/UploadVedio',formdata);
      }
    // 用户端重新上传视频
    customer.reUploadVideo = (formdata) => {
      return ajaxinstance.post('upload/ReUploadVedio',formdata);
    }
    //删除视频
    customer.deleteVideo = () => {
      return ajaxinstance.post('upload/DelVedioResource');
    } 
    
    //获取所有案例 选手
    customer.getAllCase = () => {
      return ajaxinstance.post('users/getUsresResour');
    }
    //获取入选案例 选手
    customer.getChosenCase = () => {
      return ajaxinstance.post('users/getUsresBeSelectedResour');
    }

    //获取所有案例 专家
    customer.getAllCaseByRater = (page,type,search,list) => {
      return ajaxinstance.post('index/allResource',qs.stringify({
        page,type,search,list
      }));
    }

    //通过不通过案例
    customer.getCasePase = (id,pass) => {
      return ajaxinstance.post('index/PassResource',qs.stringify({
        id,pass
      }));
    }
    //打分点评
    customer.setCaseScoreContent = (id,score,info) => {
      return ajaxinstance.post('index/ScoringResource',qs.stringify({
        id,score,info
      }));
    }

    //专家端登录
    customer.raterLogin = (username,password) => {
      return ajaxinstance.post('index/TeacherIndex',qs.stringify({
        username,password
      }));
    }
    // 专家端判断是否登录
    customer.raterIsLogin = () => {
      return ajaxinstance.post('index/TeacherIsCheck');
    }
    // 用户端判断是否登录
    customer.userIsLogin = () => {
      return ajaxinstance.post('users/UsersIsCheck');
    }

    
    
    
    
    return customer
  }
  
  export default AskPost