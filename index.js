// console.log('it\'s  work');

const express = require('express')
const app = express()
require('dotenv').config()
let port = process.env.port
app.listen(port,()=>{
    console.log(`serve is running and port number is : ${port}`);
})