const mongoose = require('mongoose')

const paiementModel = new mongoose.Schema({
    montant: {type:String, required: true},
    reservationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'},
    modePaiementId: {type: mongoose.Schema.Types.ObjectId, ref: 'ModePaiement'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Paiement', paiementModel)