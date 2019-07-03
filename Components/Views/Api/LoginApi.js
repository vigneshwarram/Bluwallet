import Url from './CommonApi'

 const loginApi=(params,LoginResult)=>
{

    fetch(Url+'login', {  
        method: 'POST',
        headers: {
          'authorization':'bearer '+params.AccessToken.trim()  , 
          'Content-Type':'application/json'
        },
            body: JSON.stringify({
            email: params.email,
            password:params.password,
          })
      }) .then((res)=> {
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
    });
}
export default loginApi;