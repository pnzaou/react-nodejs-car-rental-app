const express = require('express')
const router = express.Router()

const { clientSignUp, clientSignIn } = require('../controllers/client.controller')
const uploadPhotos = require('../middlewares/uploadsMiddleware')

router.post('/clientsignup', uploadPhotos, clientSignUp)
router.post('/clientsignin', clientSignIn)

module.exports = router