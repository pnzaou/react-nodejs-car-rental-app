const mongoose = require('mongoose')

const profilDroitModel = new mongoose.Schema({
    droiId: {type: mongoose.Schema.Types.ObjectId, ref: 'Droit'},
    profilId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profil'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ProfilDroit', profilDroitModel)