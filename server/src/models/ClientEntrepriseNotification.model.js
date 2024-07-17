const mongoose = require('mongoose')

const clientEntrepriseNotification = new mongoose.Schema({
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: "Client"},
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: "Entreprise"},
    notificationId: {type: mongoose.Schema.Types.ObjectId, ref: "Notification"}
})

module.exports = mongoose.model('ClientEntrepriseNotification', clientEntrepriseNotification)