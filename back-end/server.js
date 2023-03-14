const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT
const Mern = require('./Mernmodel');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../front-end/build'));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get( '/vacations',function(req, res) { 
    Mern.find()
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
            Mern.Mern_name = req.body.name;
            Mern.Mern_pic = req.body.pic;
            Mern.Mern_country = req.body.country;
            Mern.Mern_city = req.body.city;
            Mern.Mern_season = req.body.season;
            Mern.Mern_comment = req.body.comment;
            Mern.save().then(Mern => {
                res.json('updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.post('/add', async function(req, res) { 
   
    let doc = await Mern.create(req.body)
        res.redirect("/vacations")
    
        
})




app.listen(PORT, () => console.log(`Server is running in ${PORT}`))



