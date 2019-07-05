import Url from './CommonApi'

 const ImageUpload=async(params,resultFromAPI)=>
{
  
    let formdata = new FormData();  
formdata.append("kycDoc1 ",{
    uri: params.DocumentPhoto1.path,
    name: params.DocumentPhoto1.fileName,
    type: params.DocumentPhoto1.type})
formdata.append("kycDoc2 ",{
    uri: params.DocumentPhoto2.path,
    name: params.DocumentPhoto2.fileName,
    type: params.DocumentPhoto2.type})
    fetch('http://192.168.2.78:9090/API/user/upload/kyc', {  
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+await AsyncStorage.getItem('AccessToken')  
        },
        body:formdata
      }) .then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        resultFromAPI(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export default ImageUpload;