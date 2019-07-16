import Url from './CommonApi'
 import{AsyncStorage} from 'react-native'
 export const ProfileRegister=async(params,RegisterUpdateResponse)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/mobileuserprofile', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         // 'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            userId: await AsyncStorage.getItem('userId'),
            firstName:params.password,
            lastName:params.conformPassword,      
           dateOfBirth:1
        


        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterUpdateResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const ProfileRetrive=async(registerDetails)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/retrievedata', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            userId:10,
        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        registerDetails(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
