const mongoose = require('mongoose')

const marqueModel = new mongoose.Schema({
    nom: {type: String, required: true},
    logo: {type: String, required: true},
    paysDorigine: {type: String, required: true}
})

module.exports = mongoose.model('Marque', marqueModel)