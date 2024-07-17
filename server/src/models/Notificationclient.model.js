const mongoose = require('mongoose')

const notificationclientModel = new mongoose.Schema({
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    type: {type: String, required: true},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'}
})

module.exports = mongoose.model('Notificationclient', notificationclientModel)