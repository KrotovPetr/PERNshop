//Главный файл программы, тут устанавливаются базовые параметры: порт, требование экспресса и отправная точка
require('dotenv').config();// database
const express = require('express');// express import
const models = require('./models/models');//модели сущностей
const cors = require('cors');//
const sequelize = require('./db');//взаимодействие с базой данных
const router = require('./routes/index');//роутинг
const fileUpload = require('express-fileupload');//выгрузка файлов
const errorHandler = require('./middleware/errorHandlingMiddleware');//обработка ошибок
const path = require('path');
const PORT = process.env.PORT || 5000;//установка порта
const app = express();//создание сервера
app.use(cors());//запросы
app.use(express.json());//работа с json
app.use(express.static(path.resolve(__dirname, 'static')));//работа с static страницами
app.use(fileUpload({}));
app.use('/api', router);//роутинг


//замыкающий
app.use(errorHandler);//обработчик ошибок

const start = async () => { //попытка подключения к БД с сервером

    try {
        await sequelize.authenticate(); //подключение к бд
        await sequelize.sync(); //проверка синхронизации
        app.listen(PORT, () => console.log('Success! Server started on port ' + PORT));
    } catch (e){
        console.log(e);
    }
}

start();
