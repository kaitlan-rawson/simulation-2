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
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('db connected')
})

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
        res.status(200).send(user)
    })
    .catch(console.log)
})

app.post('/api/register', (req,res)=>{
    const db = app.get('db')
    db.users.findOne({username: req.body.username})
    .then(resp=>{
        if(resp){
            res.status(409).send('Username taken')
        } else {     
            db.addUser([req.body.username, req.body.password])
            .then(resp=>{
                let user = resp[0]
                req.session.user = user
                res.status(200).send(user)
            })
            .catch(console.log)}
    })
})

app.post('/api/updatePropNameDesc', (req,res)=>{
    const db = app.get('db')
    db.updatePropNameDesc([req.body.propertyName, req.body.propertyDesc, req.session.user.userid])
    .then(resp=>{
        console.log(resp)
        res.status(200).send(resp)
    })
})

//--------Listen--------//
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})