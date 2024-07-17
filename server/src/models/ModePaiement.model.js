const mongoose = require('mongoose')

const modePaiementModel = new mongoose.Schema({
    nom:{type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ModePaiement', modePaiementModel)