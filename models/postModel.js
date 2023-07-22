const {Schema, model} = require('mongoose')

const postShema = new Schema({
    title: {
        type: String,
        required: true
    },
    sum: {
        type:Number,
        required: true
    },
    region: {
        type:String,
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 20
    },
    img: {
        type:String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    views: {
        type: Number,
        default: 0
    }
})

module.exports = model('Post', postShema)