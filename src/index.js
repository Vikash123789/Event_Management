const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/routes')
const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://priyanka:PriyankaRajput@cluster0.fhqcn.mongodb.net/pro-4-url-shortner?retryWrites=true&w=majority',{useNewUrlParser : true
})
.then(()=>console.log('MongoDb Connected'))
.catch(err => console.log(err))

app.use('/',route)

app.listen(3000,(()=>
console.log('Express App is Running on 3000 port')))