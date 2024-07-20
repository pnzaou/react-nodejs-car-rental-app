const Marque = require('../models/Marque.model')

const addMarque = async (req, res) => {

    try {
        const {nom, paysDorigine} = req.body
        const logo = req.files['logo'][0].path 

        const marque = await Marque.create({
            nom,
            logo,
            paysDorigine
        })

        const msg = 'Marque enregistrée avec succès'
        return res.status(201).json({message: msg, data: marque})

    } catch (error) {
        console.log(error.message, error);
        const msg ='Erreur lors de l\'enregistrement'
        return res.status(500).json({message: msg, erreur: error})
    }
}

const getMarque = async (req, res) => {
    try {
        const marques = await Marque.find()
        const msg = 'Toutes les marques ont été récupérées avec succès'
        return res.status(200).json({message: msg, data: marques})
    } catch (error) {
        console.log(error.message, error);
        const msg = 'Erreur lors de la récupération des marques'
        return res.status(500).json({message: msg, erreur: error})
    }
}

const getMarqueById = async (req, res) => {
    try {
        const marque = await Marque.findById(req.params.id)
        const msg = 'Marque récupérée avec succès'
        return res.status(200).json({message: msg, data: marque})
    } catch (error) {
        console.log(error, error.message)
        const msg = 'Erreur lors de la suppression de la marque'
        return res.status(500).json({message: msg, erreur: error})
    }
}

const updateMarque = async (req, res) => {
    try {
        const {nom, paysDorigine} = req.body
        const logo = req.files['logo'][0].path 
        const newMarque = await Marque.findByIdAndUpdate(req.params.id, {
            nom,
            logo,
            paysDorigine
        },{new: true})
        const msg = 'Marque modifiée avec succès'
        return res.status(201).json({message: msg, data: newMarque})
    } catch (error) {
        console.log(error, error.message);
        const msg = 'Erreur lors de la modification de la marque'
        return res.status(500).json({message: msg, erreur: error})
    }
}

const deleteMarque = async (req, res) => {
    try {
        const rep = await Marque.findByIdAndDelete(req.params.id)
        const msg = 'Marque supprimée avec succès'
        return res.status(200).json({message: msg, info: rep})
    } catch (error) {
        console.log(error, error.message);
        const msg ='Errur lors de la suppression de la marque !'
        return res.status(500).json({message: msg, erreur: error})
    }
}

module.exports = {
    addMarque,
    getMarque,
    getMarqueById,
    updateMarque,
    deleteMarque
}