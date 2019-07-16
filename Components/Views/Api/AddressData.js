import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const CountryStateData= async(ApiLink,CountryStateData)=>
{
    fetch('http://192.168.2.78:9090/'+ApiLink, {  
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