import Url from './CommonApi'

const registerApi=(Request,params,RegisterResponse)=>
{
    fetch(Url+Request, {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+params.accesstoke
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