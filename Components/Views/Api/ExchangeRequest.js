import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const ExchangeList=async(FetchExchangedata)=>
{
    fetch(Url+'fetch/exchange/requests', {  
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
        FetchExchangedata(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}

export const ExchangeRequest=async(params,Request)=>
{
    fetch(Url+'exchange/request', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body:JSON.stringify(params)
      }).then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
         console.log(resJson)
        Request(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}