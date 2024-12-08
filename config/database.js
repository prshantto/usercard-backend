const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });


const dbconnection = mongoose.connect(process.env.DB_STRING).then(()=>{
    console.log('connected to database!')
});

module.exports = dbconnection;

