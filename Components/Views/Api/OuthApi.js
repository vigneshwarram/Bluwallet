import Url from './CommonApi'

 const OuthApi=(params,resultFromAPI)=>
{
  
    let formdata = new FormData();  
formdata.append("username",params.email)
formdata.append("password",params.password)
formdata.append("grant_type",'password')
    fetch('http://bluwallet.colan.in/bluewallet-0.0.1-SNAPSHOT/oauth/token', {  
        method: 'POST',
        headers: {
          'Authorization':'Basic '+'Ymx1ZXdhbGxldC1jbGllbnQ6Ymx1ZXdhbGxldC1zZWNyZXQ='.trim()   
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
         //errorResponse(error)
        console.error(error,);
    });
}
export default OuthApi;