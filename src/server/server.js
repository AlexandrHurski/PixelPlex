const express = require('express')
const bodyParser = require('body-parser')
const Articlemodel = require('./articlemodel')
const app = express()
const cors = require('cors')
const expressValidator = require('express-validator')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(expressValidator())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.get('/v1/articles/:id', (req,res) => {
    Articlemodel.findById(req.params.id)
        .then(data => res.send(data))

})
app.get('/v1/articles',(req,res) => {
    const page = req.query.page> 0 ? req.query.page : 1
    const limit = (req.query.limit > 0 & req.query.limit <=10) ? req.query.limit : 10
    Articlemodel.find({}, (err,docs) => {
        if(err) return console.log(err)
        res.send({
            count:docs.length,
            page:page,
            limit:limit,
            docs: docs.reverse().slice(page*limit - limit ,page*limit)    
        })
    })
})


app.post('/v1/articles',(req,res) => {
    let model = new Articlemodel({
        title: req.body.title,
        body:req.body.body,
        created_at:req.body.created_at,
        updated_at:req.body.updated_at
    })
    model.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
                res.status(422).send(err)
                console.error(err.errors.body.message? err.errors.body.message:null)
                console.error(err.errors.title.message? err.errors.title.message:null)
                
        })
})
app.put('/v1/articles/:id', (req,res) => {
    Articlemodel.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        body:req.body.body,
        updated_at:req.body.updated_at
    },{new:true,runValidators:true}, function(err,result){
        if(err){
            res.status(422).send(err)
            console.error(err.errors.body.message? err.errors.body.message:null)
            console.error(err.errors.title.message? err.errors.title.message:null)
        }else{
        res.send(result)
        }
    })
})

app.listen(8080,() => {
    console.log('server is running, port :8080')
})
