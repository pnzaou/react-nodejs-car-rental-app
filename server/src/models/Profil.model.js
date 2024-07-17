const mongoose = require('mongoose')

const profilModel = new mongoose.Schema({
    nom: {type: String, required: true}
})

module.exports = mongoose.model('Profil', profilModel)