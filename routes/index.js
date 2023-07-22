const { Router } = require('express')
const { getHome } = require('../controllers/index')
const router = Router()

router.get('/', getHome)

module.exports = router