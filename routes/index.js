const route = require('express').Router()
const controllers = require('../controllers')
const { generateToken } = require('../middlewares')

route.get('/', controllers.index)
route.post('/stk', generateToken, controllers.stkRoute)
route.get('/token', controllers.tokenGeneration)

module.exports = route
