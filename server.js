const express = require('express');
const connectDB = require('./src/helper/config/config');
const router = require('./src/modules/router/router');
// const importData = require('./src/utils/importData');
require('dotenv').config()


connectDB()

const app = express();
app.use(express.json());
app.use(router)


app.listen(process.env.PORT, ()=> console.log(`server runing on ${process.env.PORT}`))