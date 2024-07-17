const mongoose = require('mongoose')

const clientEntrepriseNotification = new mongoose.Schema({
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: "Client"},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: "Entreprise"},
    notificationId: {type: mongoose.Schema.Types.ObjectId, ref: "Notification"},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ClientEntrepriseNotification', clientEntrepriseNotification)