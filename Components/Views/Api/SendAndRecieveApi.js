import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const SendReceiveApi=async(data)=>
{
    fetch(Url+'requests', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             
             userId:await AsyncStorage.getItem('UserId') 

        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        data(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}


export const ETHTransferApi=async(data)=>
{
    fetch(Url+'eth/transfer', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             
             userId:await AsyncStorage.getItem('UserId') 

        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        data(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}


export const BTCTransferApi=async(data)=>
{
    fetch(Url+'btc/transfer', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             
             userId:await AsyncStorage.getItem('UserId') 

        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        data(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}