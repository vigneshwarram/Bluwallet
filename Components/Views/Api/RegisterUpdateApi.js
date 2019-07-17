import Url from './CommonApi'

const registerUpdateApi=async(params,RegisterUpdateResponse)=>
{
    fetch(Url+'mobileuserregupdate', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         // 'authorization':'bearer '+params.accesstoke
        },
        body: JSON.stringify({
          address: params.email,
          address1:params.password,
          postalCode:params.conformPassword,
          city:params.conformPassword,
          countryId:1,
          userId:await AsyncStorage.getItem('userId') 


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