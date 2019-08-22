import Url from './CommonApi'
import {AsyncStorage } from 'react-native'
export const PassportUpload=async(params,resultFromAPI,userId)=>
{
    let body = new FormData();
    body.append('passportSelfie', {uri: params.Selfie[0].path,name: 'photo.png',filename :'imageName.png',type: 'image/png'});
        body.append('Content-Type', 'image/png');
    
    fetch(Url+'upload/kyc',{ method: 'POST',headers:{  
         "Content-Type": "multipart/form-data",
          'Authorization':'Bearer '+await AsyncStorage.getItem('AccessToken')  
         } , body :body} )
      .then((res) => res.json())
      .then((res) => { console.log("response" +JSON.stringify(res)); })
      .catch((e) => console.log(e))
      .done()
}
export const IdUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("idCardSelfie ",{
    uri: params.Selfie[0].path,
    name: params.Selfie.path,
    type: params.Selfie.mime})
formdata.append("idCardDocumentBack",{
    uri: params.documentback.path,
    name: params.documentback.path,
    type: params.documentback.mime})
    formdata.append("idCardDocumentFront ",{
        uri: params.documentfront.path,
        name: params.documentfront.path,
        type: params.documentfront.mime})
    formdata.append("idCardSelfieWithDocument",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.path,
        type: params.selfiewithdocument.mime})
        formdata.append('userId',userId)
    fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
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
    uri: params.Selfie[0].path,
    name: params.Selfie.path,
    type: params.Selfie.mime})
formdata.append("residentPermitDocumentFront ",{
    uri: params.documentfront.path,
    name: params.documentfront.path,
    type: params.documentfront.mime})
    formdata.append("residentPermitDocumentBack ",{
        uri: params.documentback.path,
        name: params.documentback.path,
        type: params.documentback.mime})
    formdata.append("residentPermitSelfieWithDocument ",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.path,
        type: params.selfiewithdocument.mime})
        formdata.append('userId',userId)
    fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
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
    uri: params.Selfie.path,
    name: params.Selfie.path,
    type: params.Selfie.mime})
formdata.append("drivingLicenceDocumentFront ",{
    uri: params.documentfront.path,
    name: params.documentfront.path,
    type: params.documentfront.mime})
     formdata.append("drivingLicenceDocumentBack ",{
        uri: params.documentback.path,
        name: params.documentback.path,
        type: params.documentback.mime})
    formdata.append("drivingLicenceSelfieWithDocument ",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.path,
        type: params.selfiewithdocument.mime})

        formdata.append('userId',userId)
    fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/API/bluewallet/upload/kyc', {  
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
