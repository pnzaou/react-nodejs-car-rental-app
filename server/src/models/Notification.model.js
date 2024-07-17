const mongoose = require('mongoose')

const notificationModel = new mongoose.Schema({
    titre: {type: String, required: true},
    contenu: {type: String, required: true},
    type: {type: String, required: true},
    utilisateur: {type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Notification', notificationModel)