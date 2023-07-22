const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type:String,
        required: true, 
        unique: true,
        trim: true
    },
    phone: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

module.exports = model('User', userSchema)