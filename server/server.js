//--------Imported Stuff---------//
const express = require('express'),
    bodyParser = require('body-parser')
    , port = process.env.PORT || 3030
    , massive = require('massive')
    , dotenv = require('dotenv')
    , app = express()
    , session = require('express-session')

    require('dotenv').config()

//--------Middleware--------//
massive(process.env.CONNECTION_STRING).then(db=>{app.set('db',db)})

app.use(bodyParser.json());
app.use(express.static( `${__dirname}../build` ));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

//--------Axios Calls--------//
app.get('/api/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        } else {
            res.status(200).send('Logged Out')
        }
    })
})

app.post('/api/login', (req,res)=>{
    const db = app.get('db')
    db.verifyUser([req.body.username, req.body.password])
    .then(resp=>{
        let user = resp[0]
        if(user){
            req.session.user = user
        }
        res.status(200).send(resp[0])
    })
    .catch(console.log)
})

//--------Listen--------//
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})