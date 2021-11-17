//controllers/hello.route.js
//const { response } = require('express')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    //res.send('hello, from controllers...')
    res.render('hello_view', { favourites: [] })
})

router.get('/world', (req, res) => {
    //res.send('hello World, from controllers...')
    res.render('hello_view', {
        favourites: [
            { category: 'cheese', thing: 'raclette' },
            { category: 'book', thing: 'le bal des folle' },
            { category: 'drink', thing: 'cidre brut' },
            { category: 'color', thing: 'green' }
        ]
    })
})

//return the router of type middleware
module.exports = router