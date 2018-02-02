//--------Imported Stuff---------//
const express = require('express'),
    bodyParser = require('body-parser')
    , port = process.env.PORT || 3030
    , massive = require('massive')
    , dotenv = require('dotenv')
    , app = express()

    require('dotenv').config()


//--------JS Imports---------//
const controller = require('./controllers/controllers')

//--------Middleware--------//
massive(process.env.CONNECTION_STRING).then(dbInstance=>{app.set('db',dbInstance)
var dbInstance = app.get('db')
})

app.use(bodyParser.json());

//--------Axios--------//
app.get('/api/houser/users', controller.getAllUsers)
app.get('/api/houser/properties', controller.getAllProperties)

//--------Listen--------//
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})