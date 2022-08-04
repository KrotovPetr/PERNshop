import * as React from 'react';
import {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes";
import {SHOP_ROUTE} from "../../Utils/constsRoutes";
import { v4 as uuidv4 } from 'uuid';
import {routeObject} from "../../Types/types";
import {shallowEqual, useSelector} from "react-redux";


const AppRouter:FC = () => {
    const {isAuth} = useSelector((store: any):any=>
        ({isAuth: store.stateR.isAuth}), shallowEqual)

    console.log(isAuth);
    return (
        <Switch>
            {isAuth && authRoutes.map((element: routeObject) =>
                <Route key={uuidv4()} path={element.path} component={element.Component} exact/>

            )}
            {publicRoutes.map((element: routeObject) =>
                <Route key={uuidv4()} path={element.path} component={element.Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>

        </Switch>

    );
};

export default AppRouter;