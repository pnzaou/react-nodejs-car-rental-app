const mongoose = require('mongoose')

const entrepriseModel = new mongoose.Schema({
    nomComplet: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    telephone: {type: String, reuqired: true},
    localisation: String,
    description: String,
    logo: String,
    utilisateurId: {type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur'},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'}
})

module.exports = mongoose.model('Entreprise', entrepriseModel)