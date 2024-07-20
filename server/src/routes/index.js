const express = require('express')
const router = express.Router()

const { clientSignUp, clientSignIn } = require('../controllers/client.controller')
const { uploadPhotosClient, uploadLogoMarque } = require('../middlewares/uploadsMiddleware')
const { addMarque, getMarque, updateMarque, deleteMarque, getMarqueById } = require('../controllers/marque.controller')

router.post('/clientsignup', uploadPhotosClient, clientSignUp)
router.post('/clientsignin', clientSignIn)

router.route('/marques')
    .post(uploadLogoMarque, addMarque)
    .get(getMarque)

router.route('/marque/:id')
    .get(getMarqueById)
    .put(uploadLogoMarque, updateMarque)
    .delete(deleteMarque)

module.exports = router