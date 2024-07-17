const mongoose = require('mongoose')

const notificationModel = new mongoose.Schema({
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    type: {type: String, required: true},
    utilisateur: {type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur'}
})

module.exports = mongoose.model('Notification', notificationModel)