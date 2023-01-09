const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mern = new Schema({
    Mern_location: {
        type: String
    },
    Mern_type: {
        type: String
    },
    Mern_season: {
        type: String
    }
});
module.exports = mongoose.model('Mern', Mern);