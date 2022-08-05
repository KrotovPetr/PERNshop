import React, {FC} from 'react';
import {useHistory} from 'react-router-dom'
import {shallowEqual, useSelector} from "react-redux";
import headerStyles from './navbar.module.scss';
const NavBar:FC = () => {
    const history = useHistory();
    const {isAuth} = useSelector((store: any):any=>
        ({isAuth: store.stateR.isAuth}), shallowEqual);
    return (
        <header className={headerStyles.commonContainer}>
            <div></div>
        </header>
    );
};

export default NavBar;