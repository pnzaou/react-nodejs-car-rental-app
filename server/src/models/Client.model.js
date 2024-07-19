const mongoose = require('mongoose')

const clientModel = new mongoose.Schema({
    nomComplet: {type: String, required: true},
    email: {type:String, required: true, unique: true},
    motDePasse: {type: String, required: true, minlength: 8},
    telephone: {type: String, required: true},
    numPermis: {type: String, required: true},
    dateExpirationPermis: {type: Date, required: true},
    photos: [
        {
            path: String,
            filename: String
        }
    ],
    profil: { type: String, default: 'client' },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date}
})

module.exports = mongoose.model('Client', clientModel)