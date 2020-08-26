const express = require('express');
// const seed = require('./config/db/db_seed.js');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movie', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connecting error'));
db.once('open', function () {
    // we're connected!
    console.log('DB connected on port 27017');
});

const Movie = require('./server/models/movie.js');


// CREATE APP CONF
app.use('/lib', express.static(__dirname + '/client/static/'));

// CREATE ROUTES API
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/client/static/index.html");
});

app.get('/api/movie', function (req, res) {
    Movie.find({}).exec(function (err, movieList) {
        if (err) {
            console.log(err)
        }
        console.log(movieList);
        res.json(movieList);
    })
})

// START server

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

