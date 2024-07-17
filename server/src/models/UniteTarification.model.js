const mongoose = require('mongoose')

const uniteTarificationModel = new mongoose.Schema({
    nom: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.Schema('UniteTarification', uniteTarificationModel)