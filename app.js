const path = require('path')

const express = require('express')
const ejs =require('ejs')
const router = require('./routes/routes')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views','views')

app.use(router)


app.listen(3000)