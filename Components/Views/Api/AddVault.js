import {Url,AddVault} from './CommonApi'
import{AsyncStorage} from 'react-native'
export const AddVaults=async(params,data,error)=>
{
    fetch(AddVault, {  
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
           error(error)
        console.error(error);
    });
}