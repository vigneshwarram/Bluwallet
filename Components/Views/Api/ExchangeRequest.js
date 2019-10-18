import {Url} from './CommonApi'
import{AsyncStorage,NetInfo} from 'react-native'
export const ExchangeList=async(params,RequestUrl,FetchExchangedata,errors,InternetIssue)=>
{
  let accessToken=await AsyncStorage.getItem('AccessToken')
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
      fetch(Url+RequestUrl, {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+accessToken
        },
        body: JSON.stringify(params)
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        FetchExchangedata(resJson)
       
        return resJson;
       })
       .catch((error) => {
        errors(error.message);
    });
    }
    else
    {
      InternetIssue('Please check your network connection')
    }
})  
}
