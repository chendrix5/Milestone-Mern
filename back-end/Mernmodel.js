const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mern = new Schema({
    name: {
        type: String
    },
    pic: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    season: {
        type: String
    },
    comment: {
        type: String
    }
});
module.exports = mongoose.model('Mern', Mern);