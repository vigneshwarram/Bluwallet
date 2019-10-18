import {Url,ForgetPasswordUrl,PinLoginURL} from './CommonApi'
import{AsyncStorage,NetInfo,Alert} from 'react-native'
import CheckConnectivity from './CheckInternet'
 export const loginApi=async(params,LoginResult,errors,NetworkError)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
    
      console.log('Token',isConnected)
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
           errors(error.message)
       }); 
    }
    else
    {
      NetworkError('Please check your network connection')
    }
})  
}

export const ForgotAPI=async(email,LoginResult,errors,NetworkError)=>
{  
 
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
     // fetch("http://35.176.189.200:8080/bluewallet-0.0.1-SNAPSHOT/API/mobile/forgot/password", {  
        fetch(ForgetPasswordUrl, {  
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
        errors(error.message)
    }); 
    }
    else
    {
      NetworkError('Please check your network connection')
    }
  })
    
}


export const loginSecureApi=async(params,LoginSecureResult,errors,NetworkError)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  let mail=await AsyncStorage.getItem('email')
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
      {
      
        console.log('Token',token)
         fetch(Url+'login/secure', {  
             method: 'POST',
             headers: {
               'authorization':'bearer '+token.trim(), 
               'Content-Type':'application/json'
             },
                 body: JSON.stringify({
                  "email":mail,
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
              console.error(error);
              errors(error.message)
             
         });
	
    }
    else
    {
      NetworkError('Please check your network connection')
    }
  })
 
   
}

export const PinLogin=async(params,LoginResult,errors,NetworkError)=>
{
  let token=await AsyncStorage.getItem('AccessToken')
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
    
      console.log('Token',isConnected)
       fetch(PinLoginURL, {  
           method: 'POST',
           headers: {
             'authorization':'bearer '+token.trim(), 
             'Content-Type':'application/json'
           },
               body: JSON.stringify(params)
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
           errors(error.message)
       }); 
    }
    else
    {
      NetworkError('Please check your network connection')
    }
})  
}