import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const CountryStateData= async(ApiLink,CountryStateData)=>
{
    fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/'+ApiLink, {  
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        CountryStateData(resJson)
       
        return resJson;
       })
       .catch((error) => {
        ErrorResponse(error)
        console.error(error);
    });
}