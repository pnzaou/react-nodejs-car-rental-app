const mongoose = require('mongoose')

const marqueModel = new mongoose.Schema({
    nom: {type: String, required: true},
    logo: {type: String, required: true},
    paysDorigine: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Marque', marqueModel)