const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT
let Mern = require('./Mern.model');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../front-end/build'));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get( '/',function(req, res) { 
    Mern.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred: ' + err });
    });
});

app.get('/:id', function(req, res) {
    let id = req.params.id;
    Mern.findById(id, function(err, Mern) {
        res.json(Mern);
    });
});

app.post('/update/:id', function(req, res) {
    Mern.findById(req.params.id, function(err, Mern) {
        if (!Mern)
            res.status(404).send("data is not found");
        else
            Mern.Mern_location = req.body.name;
            Mern.Mern_type = req.body.pic;
            Mern.Mern_season = req.body.country;
            Mern.Mern_season = req.body.city;
            Mern.Mern_season = req.body.season;
            Mern.Mern_season = req.body.comment;
            Mern.save().then(Mern => {
                res.json('Mern updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.post('/add',function(req, res) { 
    let doc = new Mern(req.body.data)
    doc.save()
        .then(result => {
            res.status(200).json({message: 'Vacation added!', result})
        })
        .catch(err => {
            res.status(500).json({message: 'Vaction not added; error', err})
        })
})




app.listen(PORT, () => console.log(`Server is running in ${PORT}`))



