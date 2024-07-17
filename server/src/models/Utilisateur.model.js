const mongoose = require('mongoose')

const utilisateurModel = new mongoose.Schema({
    nomComplet: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telephone: {type: String, required: true},
    motDePasse: {type: String, required: true, minlenght: 8},
    profilId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profil'}
})

module.exports = mongoose.model('Utilisateur', utilisateurModel)