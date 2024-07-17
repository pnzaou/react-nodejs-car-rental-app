const mongoose = require('mongoose')

const reservationVoitureUniteTarificationModel = new mongoose.Schema({
    nbrVoitureUniteTarification: {type: Number, required: true},
    prix: {type: Number, required: true},
    reservationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'},
    voitureunitetarificationId: {type: mongoose.Schema.Types.ObjectId, ref: 'VoitureUniteTarification'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ReservationVoitureUniteTarification', reservationVoitureUniteTarificationModel)