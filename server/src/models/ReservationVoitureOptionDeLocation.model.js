const mongoose = require('mongoose')

const reservationVoitureOptionDeLocationModel = new mongoose.Schema({
    nbrVoitureOptionDeLocation: {type: Number, required: true},
    prix: {type: Number, required: true},
    reservationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'},
    voitureoptiondelocationId: {type: mongoose.Schema.Types.ObjectId, ref: 'VoitureOptionDeLocation'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('ReservationVoitureOptionDeLocation', reservationVoitureOptionDeLocationModel)