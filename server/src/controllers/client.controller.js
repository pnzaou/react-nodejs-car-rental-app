const bcrypt = require('bcrypt')
const Client = require('../models/Client.model')
const generateToken = require('../services/generateToken')
require('dotenv').config()


const clientSignUp = async (req, res) => {

    try {

        const {
            nomComplet,
            email,
            motDePasse,
            telephone,
            numPermis,
            dateExpirationPermis
        } = req.body

        const photos = [
            {path: req.files['photoPermis'][0].path, filename: req.files['photoPermis'][0].filname},
            {path: req.files['photoPieceID'][0].path, filename: req.files['photoPieceID'][0].filname}
        ]


        const seal = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(motDePasse, seal)
    
        const client = await Client.create({
            nomComplet,
            email,
            motDePasse: hashedPassword,
            telephone,
            numPermis,
            dateExpirationPermis,
            photos: photos
        })
        const msg = 'Inscription réussie'
        return res.status(201).json({message: msg, data: client})

    } catch (error) {

        console.log(error.message);
        const msg = 'Erreur lors de l\'inscription'
        return res.status(500).json({message: msg, erreur: error.message})

    }
}

const clientSignIn = async (req, res) => {

    try {
        const {email, motDePasse} = req.body

        const client = await Client.findOne({email: email})
        if(!client) return res.status(401).json({message: 'Email ou mot de passe incorrect'})

        const passwordValid = await bcrypt.compare(motDePasse, client.motDePasse)
        if(!passwordValid) return res.status(401).json({message: 'Email ou mot de passe incorrect'})

        const token = generateToken(client._id, client.email)
        const msg = 'Connexion réussie'
        return res.status(200).json({message: msg, token: token})

    } catch (error) {
        console.log(error);
        const msg = 'Echec de connexion'
        return res.status(500).json({message: msg, error})
    }
    
}

module.exports = {
    clientSignUp,
    clientSignIn
}
