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
    fetch(Url+'eth_btc/user/exchange', {  
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

export const ExchangeOnLoad=async(exchangeType,params,Request)=>
{
    fetch(Url+exchangeType, {  
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


export const ConvertToUsd=async(params,Request)=>
{
    fetch(Url+'convertusdtocrypptovalue', {  
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
        return   Request(error.json())
    });
}


export const getEqualCryptoValueApi=async(params,Response)=>
{
    fetch(Url+'getequavalentcryptovalue', {  
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
         Response(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}

export const exchangeRequestApi=async(params,Response)=>
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
         Response(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const ExchangeAdminRequest=async(urlparams,params,Response)=>
{
    fetch(Url+urlparams, {  
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
         Response(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}



export const exchangeAdmin_ETC_BTC_Api=async(params,Response)=>
{
    fetch(Url+'eth_btc/admin/exchange', {  
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
         Response(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}


export const exchangeUserApi=async(urlparams,params,Response)=>
{
    fetch(Url+urlparams, {  
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
         Response(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
