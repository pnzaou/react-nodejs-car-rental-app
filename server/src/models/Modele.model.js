const mongoose = require('mongoose')

const modeleModel = new mongoose.Schema({
    nom: {type: String, required: true},
    description: {type: String, required: true},
    marqueId : {type: mongoose.Schema.Types.ObjectId, ref: 'Marque'}
})

module.exports = mongoose.model('Modele', modeleModel)