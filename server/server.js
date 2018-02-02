//--------Imported Stuff---------//
const express = require('express'),
    bodyParser = require('body-parser')
    , port = 3030
    , massive = require('massive')
    , dotenv = require('dotenv')
    , app = express()

    require('dotenv').config()

//--------Middleware--------//

app.use(bodyParser.json())


//--------JS Imports---------//
const controller = require('./controllers/controllers')

//--------Axios--------//

//--------Listen--------//

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})