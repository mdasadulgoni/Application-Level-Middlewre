// console.log('it\'s  work');

const express = require('express')
const app = express()
require('dotenv').config()

let port = process.env.port

app.use((req,res,next)=>{
    //
    // How you can chack the  req type?
    console.log(req.method); 

    /*
        if (condition) {
            //  block of code to be executed if the condition is true

        }
    */
    
    // console.log(typeof req.method);

    if(req.method === 'GET'){
        // console.log('hi');
        res.status(400).json({
            'msg':'GET Request is not allowed'
        })

    }else{

        next()
    }

    
    
    next()
})

app.post('/student',(req,res)=>{
    // Object.method
    res.json({'msg':'Hi'})
})

app.listen(port,()=>{
    console.log(`serve is running and port number is : ${port}`);
})