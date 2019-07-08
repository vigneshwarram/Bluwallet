import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
const registerApi= async(params,RegisterResponse)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/mobileregister', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //  'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
          email: params.email,
          password:params.password,
          conformPassword:params.conformPassword
        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export default registerApi;