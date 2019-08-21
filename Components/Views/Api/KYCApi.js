import Url from './CommonApi'

export const PassportUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("passportSelfie ",{
    uri: params.Selfie.path,
    name: params.Selfie.fileName,
    type: params.Selfie.type})
formdata.append("passportDocumentBack",{
    uri: params.documentback.path,
    name: params.documentback.fileName,
    type: params.documentback.type})
    formdata.append("passportDocumentFront ",{
        uri: params.documentfront.path,
        name: params.documentfront.fileName,
        type: params.documentfront.type})
    formdata.append("passportSelfieWithDocument ",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.fileName,
        type: params.selfiewithdocument.type})
        formdata.append('userId',userid)
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
export const IdUpload=async(params,resultFromAPI,userId)=>
{
  
    let formdata = new FormData();  
formdata.append("idCardSelfie ",{
    uri: params.Selfie.path,
    name: params.Selfie.fileName,
    type: params.Selfie.type})
formdata.append("idCardDocumentBack",{
    uri: params.documentback.path,
    name: params.documentback.fileName,
    type: params.documentback.type})
    formdata.append("idCardDocumentFront ",{
        uri: params.documentfront.path,
        name: params.documentfront.fileName,
        type: params.documentfront.type})
    formdata.append("idCardSelfieWithDocument",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.fileName,
        type: params.selfiewithdocument.type})
        formdata.append('userId',userid)
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
    uri: params.Selfie.path,
    name: params.Selfie.fileName,
    type: params.Selfie.type})
formdata.append("residentPermitDocumentFront ",{
    uri: params.documentfront.path,
    name: params.documentfront.fileName,
    type: params.documentfront.type})
    formdata.append("residentPermitDocumentBack ",{
        uri: params.documentback.path,
        name: params.documentback.fileName,
        type: params.documentback.type})
    formdata.append("residentPermitSelfieWithDocument ",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.fileName,
        type: params.selfiewithdocument.type})
        formdata.append('userId',userid)
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
    name: params.Selfie.fileName,
    type: params.Selfie.type})
formdata.append("drivingLicenceDocumentFront ",{
    uri: params.documentfront.path,
    name: params.documentfront.fileName,
    type: params.documentfront.type})
     formdata.append("drivingLicenceDocumentBack ",{
        uri: params.documentback.path,
        name: params.documentback.fileName,
        type: params.documentback.type})
    formdata.append("drivingLicenceSelfieWithDocument ",{
        uri: params.selfiewithdocument.path,
        name: params.selfiewithdocument.fileName,
        type: params.selfiewithdocument.type})

        formdata.append('userId',userid)
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
