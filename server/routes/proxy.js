const teams = require('./proxyRoutes/Teams')
const games = require('./proxyRoutes/Games')
const competitions = require('./proxyRoutes/Competitions')

const Router = require('express')

const router = Router()
router.use('/teams', teams)
router.use('/games', games)
router.use('/competitions', competitions)

module.exports = router
