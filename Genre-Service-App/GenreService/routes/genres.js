// genres.js

var express = require('express');

var router = express.Router();
var db = require('../database');

router.get("/show", function(req, res) {
    db.Genres.findAll()
        .then( genres => {
            res.status(200).send(JSON.stringify(genres));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/index/:id", function(req, res) {
    db.Genres.findByPk(req.params.id)
        .then( genre => {
            res.status(200).send(JSON.stringify(genre));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});



router.post("/insert", function(req, res) {
    db.Genres.create({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
        })
        .then( genre => {
            res.status(200).send(JSON.stringify(genre));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/delete/:id", function(req, res) {
    db.Genres.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;