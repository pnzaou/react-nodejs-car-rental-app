const mongoose = require('mongoose')

const voitureFavoriteModel = new mongoose.Schema({
    date_heure: {type: Date, default: Date.now},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    voitureId: {type: mongoose.Schema.Types.ObjectId, ref: 'Voiture'}
})

module.exports = mongoose.model('VoitureFavorite', voitureFavoriteModel)