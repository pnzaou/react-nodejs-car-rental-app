const mongoose = require('mongoose')

const reservationModel = new mongoose.Schema({
    photoPermis: {type: String, required: true},
    dateFin: {type: Date, required: true},
    montantTotal: Number,
    statut: String,
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: "Client"},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Reservation', reservationModel)