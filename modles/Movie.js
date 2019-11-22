const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
