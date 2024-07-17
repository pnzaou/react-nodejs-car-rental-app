const mongoose = require('mongoose')

const voitureOptionDeLocationModel = new mongoose.Schema({
    tarifOption: Number,
    voitureId: {type: mongoose.Schema.Types.ObjectId, ref: 'Voiture'},
    optiondelocationId: {type: mongoose.Schema.Types.ObjectId, ref: 'OptionDeLocation'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('VoitureOptionDeLocation', voitureOptionDeLocationModel)