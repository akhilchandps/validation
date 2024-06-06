const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("mongoDB Connection estabilihed");
}).catch((error)=>{
    console.log("mongodb connection ",error);
})