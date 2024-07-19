const jwt = require('jsonwebtoken')

// eslint-disable-next-line no-undef
const generateToken = (id, email) => jwt.sign({data: {id, email}}, process.env.JWT_SECRET, {expiresIn: '24h'})

module.exports = generateToken