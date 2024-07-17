const mongoose = require('mongoose')

const entrepriseFavoriteModel = new mongoose.Schema({
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('EntrepriseFavorite', entrepriseFavoriteModel)