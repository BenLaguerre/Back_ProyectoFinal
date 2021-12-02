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
profileRoute.route('/perfil').get( async (req, res) => {
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
profileRoute.route('/home/:id').get(async(req, res) => {
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
profileRoute.route('/detalle-perfil/:id').get(async(req, res) => {
    await Profile.find({id: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }

    //https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed
    }).clone().catch(function(err){ console.log(err)}) 
})


// Get Profil
profileRoute.route('/perfil/:id').get(async(req, res) => {
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
profileRoute.route('/update-perfil/:id').put((req, res, next) => {
    Profile.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Book updated successfully!')
        }
    })
})

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