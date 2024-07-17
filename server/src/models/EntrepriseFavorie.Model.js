const mongoose = require('mongoose')

const entrepriseFavoriteModel = new mongoose.Schema({
    date_heure: {type: Date, default: Date.now},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'}
})

module.exports = mongoose.model('EntrepriseFavorite', entrepriseFavoriteModel)