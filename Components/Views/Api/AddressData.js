import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const CountryStateData= async(ApiLink,CountryStateData)=>
{
    fetch(Url+ApiLink, {  
      
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
        console.log('countryData',resJson)
        return resJson;
       })
       .catch((error) => {
        ErrorResponse(error)
        console.error(error);
    });
}


export const StateDataApi= async(params,StateOnlyData)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  console.log('Token',token)
  console.log("stateData",params);
   fetch(Url+'statedata', {  
       method: 'POST',
       headers: {
         'authorization':'bearer '+token.trim(), 
         'Content-Type':'application/json'
       },
           body: JSON.stringify({
           countryid: params
         })
         
     }).then((res)=> {
         console.log(res)
       return res.json();
      })
      .then((resJson)=>{
       console.log("success",resJson);
       StateOnlyData(resJson)
       return resJson;
      })
      .catch((error) => {
       console.error(error);
       Alert.alert(error)
   }); 
}


//City Api

export const CityDataApi= async(params,CityOnlyData)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  console.log('Token',token)
  console.log("citydata",params);
   fetch(Url+'citydata', {  
       method: 'POST',
       headers: {
         'authorization':'bearer '+token.trim(), 
         'Content-Type':'application/json'
       },
           body: JSON.stringify({
            stateid: params
         })
         
     }).then((res)=> {
         console.log(res)
       return res.json();
      })
      .then((resJson)=>{
       console.log("success",resJson);
       CityOnlyData(resJson)
       return resJson;
      })
      .catch((error) => {
       console.error(error);
       Alert.alert(error)
   }); 
}