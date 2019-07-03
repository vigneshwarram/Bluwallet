import Url from './CommonApi'

const registerApi=(Request,params,RegisterResponse)=>
{
    fetch('http://192.168.2.37:9090/API/mobile/mobileregister', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         // 'authorization':'bearer '+params.accesstoke
        },
        body: JSON.stringify({
          email: params.email,
          password:params.password,
          conformPassword:params.conformPassword
        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        RegisterResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export default registerApi;