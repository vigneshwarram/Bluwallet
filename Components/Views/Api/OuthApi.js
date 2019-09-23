import Url from './CommonApi'
import {Alert,NetInfo} from 'react-native'
import CheckConnectivity from './CheckInternet'
 const OuthApi=(params,resultFromAPI,errors,NetworkError)=>
{
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
      console.log('isConnected',isConnected)
      let formdata = new FormData();  
    formdata.append("username",params.email)
    formdata.append("password",params.password)
    formdata.append("grant_type",'password')
           fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/oauth/token', {  
          //fetch('http://192.168.2.19:9090/oauth/token', {  
            method: 'POST',
            headers: {
              'Authorization':'Basic '+'Ymx1ZXdhbGxldC1jbGllbnQ6Ymx1ZXdhbGxldC1zZWNyZXQ='.trim(),
              'Content-Type': 'multipart/form-data'
              //'Content-Type': 'application/json',
            },
            body:formdata
          }).then((res)=> {
    
              console.log('Reponse before json',res)
            return  res.json();
           })
           .then((resJson)=>{
            console.log("success",resJson);
            resultFromAPI(resJson)
            return resJson;
           })
           .catch((error) => {
            errors(error.message)
        });
    }
    else
    {
      NetworkError('Please check your network connection')
    }
})
   
}
export default OuthApi;