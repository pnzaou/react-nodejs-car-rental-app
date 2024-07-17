const mongoose = require('mongoose')

const droitModel = new mongoose.Schema({
    autorisation: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Droit', droitModel)