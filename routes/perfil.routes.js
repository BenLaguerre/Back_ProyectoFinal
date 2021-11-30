const express = require('express');
const app = express();

const profileRoute = express.Router();
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
    })
})
// Get Profil
profileRoute.route('/perfil/:id').get(async(req, res) => {
    await Profile.find({id: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
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