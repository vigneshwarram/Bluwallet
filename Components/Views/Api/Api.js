
import auth from './auth'
export default class Api {
    static OuthApi(params) {
        let formdata = new FormData();  
        formdata.append("username",params.email)
        formdata.append("password",params.password)
        formdata.append("grant_type",'password')
      return fetch('https://coinways.io/bluewallet-0.0.1-SNAPSHOT/oauth/token', {
        method: "POST",
        headers: {
            'Authorization':'Basic '+'Ymx1ZXdhbGxldC1jbGllbnQ6Ymx1ZXdhbGxldC1zZWNyZXQ='.trim(),
            'Content-Type': 'multipart/form-data'
            //'Content-Type': 'application/json',
          },
          body:formdata
      })
      .then(response => auth.verifyResponse(response))
      .then(json => json)
      .catch(err => err);
    }
  }