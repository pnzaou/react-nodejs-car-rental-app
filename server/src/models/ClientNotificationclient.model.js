const mongoose = require('mongoose')

const clientNotificationclientModel = new mongoose.Schema({
    notificationclientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Notificationclient'},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'}
})

module.exports = mongoose.model('ClientNotificationclient', clientNotificationclientModel)