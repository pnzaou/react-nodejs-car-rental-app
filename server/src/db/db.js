const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGO_URI

const connexion = async () => {
    try {
        const rep = await mongoose.connect(uri)
        console.log(`Connexion à la base données ${rep.connection.name} réussie.`);
    } catch (error) {
        console.log(`Erruer de connexion à BD : ${error}`);
    }
}

const deconnexion = async () => {
    try {
        await mongoose.disconnect()
        console.log('Deconnexion réussie.');
    } catch (error) {
        console.log(`Erreur lors de la deconnexion : ${error}`);
    }
}


module.exports = {
    connexion,
    deconnexion
}