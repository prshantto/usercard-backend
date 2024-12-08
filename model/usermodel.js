const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username : String,
    name: String,
    email : String,
    phone : String,
    address : String,
    website : String,
    company : String,
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;