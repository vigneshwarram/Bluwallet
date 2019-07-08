import Url from './CommonApi'
import {AsyncStorage} from 'react-native'
 const loginApi=async(params,LoginResult)=>
{
   let token=await AsyncStorage.getItem('AccessToken')
   console.log('Token',token)
    fetch(Url+'login', {  
        method: 'POST',
        headers: {
          'authorization':'bearer '+token.trim(), 
          'Content-Type':'application/json'
        },
            body: JSON.stringify({
            email: params.email,
            password:params.password,
          })
      }) .then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        LoginResult(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export default loginApi;