const mongoose = require('mongoose')

const schema = mongoose.Schema({
    text: String,
    rating: Number
})


module.exports = mongoose.model('Feedback', schema)