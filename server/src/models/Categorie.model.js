const mongoose = require('mongoose')

const categorieModel = new mongoose.Shema({
    nom: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model('Categorie', categorieModel)