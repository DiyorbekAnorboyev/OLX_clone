const User = require('../models/authModel')

//Get* Login Page
const getLoginPage = (req, res) => {
    res.render('auth/login')
}

//Get* SignUp page
const getSignupPage = (req, res) => {
    res.render('auth/signup')
}

//Post* SignUp page create new user
const postSignupPage = async(req, res) => {
    const {email, username} = req.body
    const userExsit = await User.findOne({email})
    const usernameExsit = await User.findOne({username})
    if(userExsit){
        return res.redirect('/auth/signup')
    }
    if(usernameExsit){
        return res.redirect('/auth/signup')
    }
    const newUser = await User.create(req.body)
    newUser.save()
    res.redirect('/posts')
}

//Post* Login page Login
const postLoginPage = async(req, res) => {
    const {email, password} = req.body
    const userExsit = await User.findOne({email})
    if(!userExsit){
        return res.redirect('/auth/login')
    }
    if(userExsit.password !== password){
        return res.redirect('/auth/login')
    }
    res.redirect('/posts')
}


module.exports = {getLoginPage, getSignupPage, postSignupPage, postLoginPage}
