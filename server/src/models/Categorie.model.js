const mongoose = require('mongoose')

const categorieModel = new mongoose.Shema({
    nom: {type: String, required: true},
    description: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Categorie', categorieModel)