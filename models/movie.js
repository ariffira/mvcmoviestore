const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    author: String,
    //author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    director: String,
    budget: Number,
    category: String,
    //category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    stars: [{type: Schema.Types.ObjectId, ref: 'Star'}],
    image: String,
    released: Date,
    added: Date,
    updated: Date
});

module.exports = mongoose.model('Movie', movieSchema);