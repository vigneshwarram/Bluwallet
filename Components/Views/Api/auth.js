
class auth{
    static verifyResponse(response){
        
        if(response.status === 200 || response.status === 202 || response.status === 204) {
           console.log('success',response)
            return response.json();
        } else if(response.status === 403 || response.status === 401) {
            console.log('error',response)
            return response.json();
        } else {
            console.log('error',response)
            return response.json();
        }
    }
}
export default auth;