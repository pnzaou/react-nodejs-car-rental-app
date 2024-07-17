const mongoose = require('mongoose')

const profilDroitModel = new mongoose.Schema({
    droiId: {type: mongoose.Schema.Types.ObjectId, ref: 'Droit'},
    profilId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profil'}
})

module.exports = mongoose.model('ProfilDroit', profilDroitModel)