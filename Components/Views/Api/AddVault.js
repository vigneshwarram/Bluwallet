import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const AddVaults=async(params,data,error)=>
{
    fetch("http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/API/useractivities/ethOrbtc/investment", {  
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