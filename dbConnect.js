const mongoose = require('mongoose')

const URL = 'mongodb+srv://SahilN:$ahil0272@cluster0.qcuyzci.mongodb.net/test'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

