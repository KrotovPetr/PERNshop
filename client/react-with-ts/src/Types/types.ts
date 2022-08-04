import {FC} from "react";

//для универсализации роутинга приложения
export type routeObject = {
    path: string, //ссылка на элемент
    Component:FC //сам элемент
};
