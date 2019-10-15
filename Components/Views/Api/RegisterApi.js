import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
const registerApi= async(params,RegisterResponse,ErrorResponse)=>
{
    fetch("http://35.176.189.200:8080/bluewallet-0.0.1-SNAPSHOT/API/mobile/mobileregister", {  
      //fetch("http://192.168.2.78:9090/API/mobile/mobileregister", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         // 'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
          email: params.email,
          password:params.password,
          conformPassword:params.conformPassword
        })
      }).then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        ErrorResponse(error)
        console.error(error);
    });
}
export default registerApi;