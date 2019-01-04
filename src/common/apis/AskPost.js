import qs from 'qs';
const AskPost = (ajaxinstance) => {
    const customer = {}
    customer.uploadCase = (formdata) => {
        return ajaxinstance.post('upload/Upload',formdata);
      }
    customer.uploadVideo = (formdata) => {
        return ajaxinstance.post('upload/UploadVedio',formdata);
      }
    return customer
  }
  
  export default AskPost