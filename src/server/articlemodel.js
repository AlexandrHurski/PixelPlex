const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://unkzhd:p4sss0me@ds111425.mlab.com:11425/lalala',{ useNewUrlParser: true })

const ArticleModel = new Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    created_at:String,
    updated_at:String
})

module.exports = mongoose.model('PixelArticles', ArticleModel)