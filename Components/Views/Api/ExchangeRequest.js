import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const ExchangeList=async(params,RequestUrl,FetchExchangedata,errors,InternetIssue)=>
{
    fetch(Url+RequestUrl, {  
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
        FetchExchangedata(resJson)
       
        return resJson;
       })
       .catch((error) => {
        errors(error.message);
    });
}

