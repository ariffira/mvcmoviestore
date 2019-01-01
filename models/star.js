const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starSchema = new Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
    added: Date,
    country: String,
    age: String,
    star_rate: Number
});

module.exports = mongoose.model('Star', starSchema);