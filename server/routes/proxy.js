const teams = require('./proxyRoutes/Teams')
const games = require('./proxyRoutes/Games')
const competitions = require('./proxyRoutes/Competitions')
const persons = require('./proxyRoutes/Persons')

const Router = require('express')

const router = Router()
router.use('/teams', teams)
router.use('/games', games)
router.use('/competitions', competitions)
router.use('/persons', persons)

module.exports = router
