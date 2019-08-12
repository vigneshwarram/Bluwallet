import Url from './CommonApi'
import{AsyncStorage,NetInfo} from 'react-native'

const registerUpdateApi=async(params,RegisterUpdateResponse)=>
{
    fetch(Url+'mobileuserregupdate', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
          address: params.email,
          address1:params.password,
          postalCode:params.postalCode,
          city:params.city,
          countryId:params.countryId,
          stateId:'',
          userId:await AsyncStorage.getItem('userId'),
          firstName:params.firstName,
          lastName:params.lastName,
          dateOfBirth:params.dateOfBirth


        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterUpdateResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export default registerUpdateApi;