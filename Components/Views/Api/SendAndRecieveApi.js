import {Url} from './CommonApi'
import{AsyncStorage} from 'react-native'
export const SendApi=async(url,params,data,errors)=>
{
    fetch(Url+url, {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body:JSON.stringify(params)
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        data(resJson)
       
        return resJson;
       })
       .catch((error) => {
        errors(error);
    });
}
export const RequestPaymentApi=async(params,data,errors)=>
{
    fetch(Url+'request', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body:JSON.stringify(params)
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        data(resJson)
       
        return resJson;
       })
       .catch((error) => {
        errors(error);
    });
}
