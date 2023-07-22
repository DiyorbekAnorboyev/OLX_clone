const { Router } = require('express')
const { getLoginPage, getSignupPage, postSignupPage, postLoginPage } = require('../controllers/auth')
const router = Router()

//get
router.get('/login', getLoginPage)
router.get('/signup', getSignupPage)

//post
router.post('/signup', postSignupPage)
router.post('/login', postLoginPage)

module.exports = router