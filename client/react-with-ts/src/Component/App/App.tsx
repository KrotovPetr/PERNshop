import React, {FC} from 'react';
import NavBar from "../NavBar/NavBar";
import AppRouter from "../AppRouter/AppRouter";
import appStyles from "./app.module.scss";
const App:FC = () => {
    return (
        <div className={appStyles.pageMain}>
            <NavBar />
            <AppRouter />
        </div>
    );
};

export default App;