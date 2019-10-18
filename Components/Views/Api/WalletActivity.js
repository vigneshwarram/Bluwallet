import {Url} from './CommonApi'
import{AsyncStorage} from 'react-native'
export const getactivitydata=async(params,VaultResponse,errors)=>
{
    fetch(Url+'getactivitydata', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify(params)
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        VaultResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        errors(error);
    });
}
export const GetGraph=async(params,VaultResponse)=>
{
    fetch(Url+'getgraphdata', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify(params)
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        VaultResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}



