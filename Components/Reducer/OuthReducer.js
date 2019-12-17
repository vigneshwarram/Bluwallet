import * as types from '../Action/ActionTypes'

const InitialState={
    LoginResponse:[]
}

export default function GetLoginState(state=InitialState,actions){
     switch(actions.type){
         case types.LOGIN_PENDING:
             return{
                 ...state,
                 IsLoginLoding:true,
                 IsLoginSuccess:false,
                 IsLoginError:false
             }
             case types.LOGIN_SUCCESS:
             return{
                ...state,
                IsLoginLoding:false,
                IsLoginSuccess:true,
                LoginSuccessDetails:actions.logindetails,
                IsLoginError:false
             }
             case types.LOGIN_FAILURE:
             return{
                 ...state,
                 IsLoginLoding:false,
                 IsLoginSuccess:false,
                 IsLoginError:true,
                 LoginErrorDetails:actions.loginErrordetails

             }
             default:
                return state
     }
}