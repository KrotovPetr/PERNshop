import {combineReducers} from "redux";
import {CHANGE_USER_AUTH, TStateActions} from "../ActionsDir/ActionTypes/actions-types";


export type TStateReducer = {
   isAuth: boolean;
};


const initialState:TStateReducer={
   //авторизован ли пользователь
   isAuth: false
}

export const stateReducer = ( state: TStateReducer = initialState,
                                  action: TStateActions): TStateReducer => {
   switch (action.type) {
      //меняем статус авторизованности
      case CHANGE_USER_AUTH:{
         return {
            ...state,
            isAuth: action.data,
         }
      }
      default: {
         return state;
      }
   }

}

export const rootReducer = combineReducers({
   stateR: stateReducer,
});