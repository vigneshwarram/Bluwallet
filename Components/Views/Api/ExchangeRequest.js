import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const ExchangeList=async(FetchExchangedata)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/fetch/exchange/requests', {  
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

export const ExchangeRequest=async(params,FetchExchangedata)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/exchange/request', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             
             userId:await AsyncStorage.getItem('UserId'),
             "exchangeMode":"BTC_ETH",
             "amountToTrade":"0.01",
             "amountYouGet":"3",
             "transactionFee":"0.0001",
             "totalAmount":"0.0101"

        })
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