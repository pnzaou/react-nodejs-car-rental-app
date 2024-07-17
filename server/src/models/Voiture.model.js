const mongoose = require('mongoose')

const voitureModel = new mongoose.Schema({
    immatriculation: {type: String, required: true},
    image: {type: String, required: true},
    anneeDeFabrication: {type: Number, required: true},
    typeDeCarburant: {type: String, required: true},
    capaciteDassise: {type: Number, required: true},
    categorieId: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'},
    modeleId: {type: mongoose.Schema.Types.ObjectId, ref: 'Modele'}
})

module.exports = mongoose.model('Voiture', voitureModel)