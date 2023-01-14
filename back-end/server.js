const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;

let Mern = require('./Mern.model');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../front-end/build'));


mongoose.connect('mongodb://127.0.0.1:27017/Mern', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get( '/',function(req, res) { 
    Mern.find(function(err, Mern) {
        if (err) {
            console.log(err);
        } else {
            res.json(Mern);
        }
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
            Mern.Mern_location = req.body.Mern_location;
            Mern.Mern_type = req.body.Mern_type;
            Mern.Mern_season = req.body.Mern_season;
            Mern.save().then(Mern => {
                res.json('Mern updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.post('/add',function(req, res) { 
    console.log('hit the post add route')
    let Mern = new Mern(req.body);
    Mern.save()
        .then(Mern => {
            res.status(200).json({'Mern': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Mern failed');
        });
});




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


