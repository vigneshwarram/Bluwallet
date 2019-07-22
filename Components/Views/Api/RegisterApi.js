import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
const registerApi= async(params,RegisterResponse,ErrorResponse)=>
{
    fetch("http://192.168.2.7:9090/API/mobile/mobileregister", {  
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