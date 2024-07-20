const multer = require('multer')

const storageClient = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/client')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploadClient = multer({storage: storageClient})
const uploadPhotosClient = uploadClient.fields([{name: 'photoPermis'}, {name: 'photoPieceID'}])

const storageMarque = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/marque')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploadMarque = multer({storage: storageMarque})
const uploadLogoMarque = uploadMarque.fields([{name: 'logo'}])

module.exports = {
    uploadPhotosClient,
    uploadLogoMarque
}