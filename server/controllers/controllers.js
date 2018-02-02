module.exports = {
    getAllUsers: function(req,res,next){
        const dbInstance = req.app.get('db')

        req.app.get('db').getAllUsers()
            .then(users=>res.status(200).send(users))
            .catch(err=> {
                console.log(err)
                res.status(500).send(err)
        })
    },

    getAllProperties: function(req,res,next){
        const dbInstance=req.app.get('db')
        
        req.app.get('db').getAllProperties()
        .then(propertyInfo=>res.status(200).send(propertyInfo))
        .catch(err=>{
            console.log(err)
            res.status(500).send(err)
        })
    }
}