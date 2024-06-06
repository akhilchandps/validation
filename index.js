require('dotenv').config();

const express = require('express')

const db = require('./DB/connectionstring');

const router = require('./Router/router');

cors = require('cors')

pfserver = express()

pfserver.use(express.json())

pfserver.use(cors())

pfserver.use(router)

PORT = 4000 || process.env.PORT

pfserver.listen(PORT,()=>{
    console.log('pfserver Listening on the ' +PORT);
})

pfserver.get('/',(req,res)=>{
    res.send("Hello world")
})