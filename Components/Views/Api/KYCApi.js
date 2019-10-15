import Url from './CommonApi'
import {AsyncStorage } from 'react-native'
export const PassportUpload=async(params,resultFromAPI,userId)=>
{
    let formdata = new FormData();  
formdata.append("passportSelfie ",{
    uri: params.Selfie.uri,
    name:  params.Selfie.name,
    type:'image/jpeg'})
formdata.append("passportDocumentBack",{
    uri: params.documentback.uri,
    name:params.documentback.name,
    type:'image/jpeg'
})
    formdata.append("passportDocumentFront ",{
        uri: params.documentfront.uri,
        name:params.documentfront.name,
        type:'image/jpeg'
    })
    formdata.append("passportSelfieWithDocument ",{
        uri: params.selfiewithdocument.uri,
        name:  params.selfiewithdocument.name,
        type: 'image/jpeg'
    })
        formdata.append('userId',userId)
 await fetch(Url+'upload/kyc', {  
        method: 'POST',
        headers: {
            Accept: 'application/json',
           'Content-Type': 'multipart/form-data',
          'Authorization':'bearer '+await AsyncStorage.getItem('AccessToken')  
        },
        body:formdata
      }).then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        resultFromAPI(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const IdUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("idCardSelfie ",{
    uri: params.Selfie.uri,
    name:  params.Selfie.name,
    type:'image/jpeg'})
formdata.append("idCardDocumentBack",{
    uri: params.documentback.uri,
    name:params.documentback.name,
    type:'image/jpeg'
})
    formdata.append("idCardDocumentFront ",{
        uri: params.documentfront.uri,
        name:params.documentfront.name,
        type:'image/jpeg'
    })
    formdata.append("idCardSelfieWithDocument",{
        uri: params.selfiewithdocument.uri,
        name:  params.selfiewithdocument.name,
        type: 'image/jpeg'
    })
        formdata.append('userId',userId)
    fetch('http://35.176.189.200:8080/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+await AsyncStorage.getItem('AccessToken')  
        },
        body:formdata
      }) .then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        resultFromAPI(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const ResidentUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("residentPermitSelfie ",{
    uri: params.Selfie.uri,
    name:  params.Selfie.name,
    type:'image/jpeg'})
formdata.append("residentPermitDocumentFront ",{
    uri: params.documentfront.uri,
    name:params.documentfront.name,
    type:'image/jpeg'
})
    formdata.append("residentPermitDocumentBack ",{
        uri: params.documentback.uri,
    name:params.documentback.name,
    type:'image/jpeg'
})
    formdata.append("residentPermitSelfieWithDocument ",{
        uri: params.selfiewithdocument.uri,
        name:  params.selfiewithdocument.name,
        type: 'image/jpeg'
    })
        formdata.append('userId',userId)
    fetch('http://35.176.189.200:8080/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+await AsyncStorage.getItem('AccessToken')  
        },
        body:formdata
      }) .then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        resultFromAPI(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const LicenseUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("drivingLicenceSelfie ",{
    uri: params.Selfie.uri,
    name:  params.Selfie.name,
    type:'image/jpeg'})
formdata.append("drivingLicenceDocumentFront ",{
    uri: params.documentfront.uri,
    name:params.documentfront.name,
    type:'image/jpeg'
})
     formdata.append("drivingLicenceDocumentBack ",{
        uri: params.documentback.uri,
        name:params.documentback.name,
        type:'image/jpeg'
    })
    formdata.append("drivingLicenceSelfieWithDocument ",{
        uri: params.selfiewithdocument.uri,
        name:  params.selfiewithdocument.name,
        type: 'image/jpeg'
    })
        formdata.append('userId',userId)
    fetch('http://35.176.189.200:8080/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+await AsyncStorage.getItem('AccessToken')  
        },
        body:formdata
      }) .then((res)=> {
          console.log(res)
        return res.json();
       })
       .then((resJson)=>{
        console.log("success",resJson);
        resultFromAPI(resJson)
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
