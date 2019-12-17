import * as types from './ActionTypes'
import * as ResponseConst from './constant'
import Outh from '../Views/Api/Api'
 export function GetLoginDetails(params){
     return function (dispatch){
         dispatch(getOuthPending())
         return Outh.OuthApi(params).then(OuthResponse=>{
             if(OuthResponse===ResponseConst.SUCCESS){
                 dispatch(getLoginPending())
                 return Outh.LoginAPI(params).then(LoginResponse=>{
                     if(LoginResponse===ResponseConst.SUCCESS){
                         dispatch(getLoginSuccessDetails())
                     }
                     else{
                         dispatch(getLoginErrorDetails(LoginResponse))
                     }
                 }).catch(error=>{
                     dispatch(getLoginErrorDetails(ERROR))
                 })
                // dispatch(getSuccessOuthDetails(OuthResponse))
             }
         })
     }
 }

 export function getOuthPending(){
     return{
         type:types.LOGIN_PENDING
     }
 }
 export function getLoginPending(){
    return{
        type:types.LOGIN_PENDING
    }
}
export function getLoginSuccessDetails(logindetails){
    return{
        type:types.LOGIN_SUCCESS,
        logindetails

    }
}
export function getLoginErrorDetails(loginErrordetails){
    return{
        type:types.LOGIN_FAILURE,
        loginErrordetails

    }
}