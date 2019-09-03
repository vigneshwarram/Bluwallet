import Url from './CommonApi'
 import{AsyncStorage} from 'react-native'
 export const ProfileRegister=async(params,RegisterUpdateResponse)=>
{
    fetch(Url+'mobileuserprofile', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         // 'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            userId: await AsyncStorage.getItem('UserId'),
            firstName:params.firstname,
            lastName:params.lastname,      
            dateOfBirth:params.dates
        
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
export const TwoFactorApi=async(params,RegisterUpdateResponse)=>
{
    fetch(Url+'twofactor/authentication', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify(params)
      }).then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterUpdateResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
       alert.alert(error);
    });
}
export const ProfileRetrive=async(registerDetails)=>
{
    fetch(Url+'retrievedata', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            userId: await AsyncStorage.getItem('UserId'),
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
