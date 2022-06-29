const express = require('express')
const router = express.Router()

router.get('/', (req,res, next) => {
    res.render('index', {
        pageContent: 'Add a user',
        pageTitle: 'Home',
        path:'/'
    })
})

const users = [] 

router.get('/users', (req,res, next) => {
    res.render('users', {
        pageContent: 'Users',
        pageTitle: 'Users',
        path: '/users',
        users: users
    })
})


router.post('/users', (req,res,next) => {
    if(req.body.name !== ''){
    users.push({name: req.body.name})
    }
    if(users.length){
        res.status(302).redirect('/users')
    }else res.status(302).redirect('/')
})

module.exports = router