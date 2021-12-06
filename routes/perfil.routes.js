const express = require('express');
const app = express();

//Import express-promise-router, el router clásico no gestiona las promesas.
const profileRoute = require('express-promise-router')();
const { Profile }  = require('../model/perfil');

// Add Profil
profileRoute.route('/add-perfil').post((req, res, next) => {
    Profile.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all Profil
profileRoute.route('/perfil').get( async (req, res , next) => {
    await Profile.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)})  
})

// select Profil
profileRoute.route('/home/:id').get(async(req, res,  next) => {
    await Profile.find({id: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)}) 
})

// select detalle perfil
profileRoute.route('/detalle-perfil/:id').get(async(req, res, next) => {
    await Profile.find({id: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)}) 
})

profileRoute.route('/detalle-perfil').get(async(req, res, next) => {
    let email = req.query.email
    console.log(email)
    await Profile.find({email :email},(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)}) 
})


// Get Profil
profileRoute.route('/perfil/:id').get(async(req, res, next) => {
    await Profile.find({id: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)}) 
})


// Update Profil
profileRoute.route('/update-perfil/:id').put(async(req, res, next) => {
    const id = req.params.id;
    console.log(req.body)
    await Profile.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Profile with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Profile was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Profile with id=" + id
      });
    });
});


// Delete Profil
profileRoute.route('/delete-perfil/:id').delete((req, res, next) => {
    Profile.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = profileRoute;