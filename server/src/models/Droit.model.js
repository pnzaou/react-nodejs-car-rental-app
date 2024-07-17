const mongoose = require('mongoose')

const droitModel = new mongoose.Schema({
    autorisation: {type: String, required: true}
})

module.exports = mongoose.model('Droit', droitModel)