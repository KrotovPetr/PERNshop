export const CHANGE_USER_AUTH:"CHANGE_USER_AUTH" = "CHANGE_USER_AUTH";

export interface IChangeUserAuth{ //смена статуса авторизованности пользователя
    readonly type: typeof CHANGE_USER_AUTH;
    readonly data: boolean;
}

export type TStateActions = | IChangeUserAuth;