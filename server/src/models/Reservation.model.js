const mongoose = require('mongoose')

const reservationModel = new mongoose.Schema({
    photoPermis: {type: String, required: true},
    dateFin: {type: Date, required: true},
    dateCreation: {type: Date, default: Date.now},
    montantTotal: Number,
    statut: String,
    entrepriseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: "Client"}
})

module.exports = mongoose.model('Reservation', reservationModel)