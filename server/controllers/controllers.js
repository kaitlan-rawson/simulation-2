module.exports = {
    getAllUsers: function(req,res,next){
        const dbInstance = req.app.get('db')

        dbInstance.getAllUsers()
            .then(users=>res.status(200).send(users))
            .catch(err=> {
                console.log(err)
                res.status(500).send(err)
        })
    },

    getAllProperties: function(req,res,next){
        const dbInstance=req.app.get('db')
        
        dbInstance.getAllProperties()
        .then(propertyInfo=>res.status(200).send(propertyInfo))
        .catch(err=>{
            console.log(err)
            res.status(500).send(err)
        })
    },

    addPropertyName: function(req,res,next){
        const dbInstance=req.app.get('db')
        const{propertyName}=req.body

        dbInstance.addPropertyName([propertyName])
        .then(()=>res.status(200).send()) 
        .catch(()=>res.status(500).send())       
    },

    addPropertyDesc: function(req,res,next){
        const dbInstance=req.app.get('db')
        const{propertyDesc}=req.body

        dbInstance.addPropertyDesc([propertyDesc])
        .then(()=>res.status(200).send()) 
        .catch(()=>res.status(500).send())  
    }
}