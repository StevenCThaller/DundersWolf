const mongoose = require('mongoose');
const User = require('../models/User');

module.exports.register = (req,res) => {
    User.create(req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
}

module.exports.allUsers = (req, res) => {
    User.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
}