const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

let profileSchema = new Schema({
    id: { 
        type: Number 
    },
    name: {
        firstName : { type: String },
        lastName : { type: String }
    },
    gender: {
        type: String
    },
    edad: {
        type: Number
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    music: {
        type: String
    }
})

profileSchema.plugin(autoIncrement.plugin, { model: 'Profile', field: 'id', startAt: 0 });
var Profile = mongoose.model('Profile', profileSchema)

module.exports = { Profile }