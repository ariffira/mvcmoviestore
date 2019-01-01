const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    options: {type: String, required: true, enum:['Action', 'Drama', 'Horror', 'Comedy'], default:'Action'},
    rate: { type: Number }
});

module.exports = mongoose.model('Category', categorySchema);