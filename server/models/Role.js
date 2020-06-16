const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: String,
    description: String,
})