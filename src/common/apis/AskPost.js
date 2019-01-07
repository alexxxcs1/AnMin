import qs from 'qs';
const AskPost = (ajaxinstance) => {
    const customer = {}
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
    //获取所有案例
    customer.getAllCase = () => {
      return ajaxinstance.post('users/getUsresResour');
    }
    //获取入选案例
    customer.getChosenCase = () => {
      return ajaxinstance.post('users/getUsresBeSelectedResour');
    }
    return customer
  }
  
  export default AskPost