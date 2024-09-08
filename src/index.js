// require('dotenv').config({path: './env'});

import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})

import connectDB from './db/index.js';
import {app} from './app.js'
import { DB_NAME } from './constants.js';
console.log(DB_NAME);




connectDB()
.then(() => {
    app.listen(process.env.PORT || 800, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log('mongo db connection failed !! ', err);
})


















/*
import express from 'express'

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("Errror", (error) => {
            console.log("DB can to connect", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("error: ", error);
        throw error
    }
})()
*/