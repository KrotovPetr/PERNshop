//Главный файл программы, тут устанавливаются базовые параметры: порт, требование экспресса и отправная точка
require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const cors = require('cors');
const sequelize = require('./db');



const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

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
