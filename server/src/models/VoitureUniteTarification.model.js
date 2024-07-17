const mongoose = require('mongoose')

const voitureUniteTarificationModel = new mongoose.Schema({
    tariflocation: {type:Number, required: true},
    voitureId: {type: mongoose.Schema.Types.ObjectId, ref: 'Voiture'},
    unitetarificationId: {type: mongoose.Schema.Types.ObjectId, ref: 'UniteTarification'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('VoitureUniteTarification', voitureUniteTarificationModel)