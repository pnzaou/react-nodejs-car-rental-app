const mongoose = require('mongoose')

const voitureFavoriteModel = new mongoose.Schema({
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    voitureId: {type: mongoose.Schema.Types.ObjectId, ref: 'Voiture'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('VoitureFavorite', voitureFavoriteModel)