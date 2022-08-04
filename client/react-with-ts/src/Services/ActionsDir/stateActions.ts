import {CHANGE_USER_AUTH} from "./ActionTypes/actions-types";

export function changeUserAuth(authData:boolean){ //установка авторизации пользователя
    return function(dispatch:any){
        dispatch({type:CHANGE_USER_AUTH, data: authData});
    }
}