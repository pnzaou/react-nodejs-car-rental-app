const mongoose = require('mongoose')

const avisModel = new mongoose.Schema({
    contenu: String,
    note: {type: Number, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Avis', avisModel)