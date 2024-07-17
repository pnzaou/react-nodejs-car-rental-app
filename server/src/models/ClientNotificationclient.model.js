const mongoose = require('mongoose')

const clientNotificationclientModel = new mongoose.Schema({
    notificationclientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Notificationclient'},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ClientNotificationclient', clientNotificationclientModel)