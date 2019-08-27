import Url from './CommonApi'
import{AsyncStorage,NetInfo,Alert} from 'react-native'
import CheckConnectivity from './CheckInternet'
 export const loginApi=async(params,LoginResult)=>
{

 
    let token=await AsyncStorage.getItem('AccessToken')
    console.log('Token',token)
     fetch(Url+'login', {  
         method: 'POST',
         headers: {
           'authorization':'bearer '+token.trim(), 
           'Content-Type':'application/json'
         },
             body: JSON.stringify({
             email: params.email,
             password:params.password,
           })
       }).then((res)=> {
           console.log(res)
         return res.json();
        })
        .then((resJson)=>{
         console.log("success",resJson);
         LoginResult(resJson)
         return resJson;
        })
        .catch((error) => {
         console.error(error);
         Alert.alert(error)
     }); 
}

export const ForgotAPI=async(email,LoginResult)=>
{

 
  
   
     fetch("http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/API/mobile/forgot/password", {  
         method: 'POST',
         headers: {
           'Content-Type':'application/json'
         },
             body: JSON.stringify({
             email: email,
    
           })
       }).then((res)=> {
           console.log(res)
         return res.json();
        })
        .then((resJson)=>{
         console.log("success",resJson);
         LoginResult(resJson)
         return resJson;
        })
        .catch((error) => {
         console.error(error);
         Alert.alert(error)
     }); 
}


export const loginSecureApi=async(params,LoginSecureResult)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  console.log('Token',token)
   fetch(Url+'login/secure', {  
       method: 'POST',
       headers: {
         'authorization':'bearer '+token.trim(), 
         'Content-Type':'application/json'
       },
           body: JSON.stringify({
            "email":await AsyncStorage.getItem('email'),
            "securedKey":params
         })
     }) .then((res)=> {
         console.log(res)
       return res.json();
      })
      .then((resJson)=>{
       console.log("success",resJson);
       LoginSecureResult(resJson)
       return resJson;
      })
      .catch((error) => {
        if(error)
        {
          this.handleErrors
        }
       
   });
   
}

