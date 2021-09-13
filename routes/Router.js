const express = require('express')
const axios = require('axios')
const Router = express.Router()
const moment = require('moment')
const math = require('math')


Router.get('/', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=2c6bfa81c2e8403da6eff5d85b8d1432';

        const news_get = await axios.get(url)
        res.render('news', { articles: news_get.data.articles })

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})


Router.get('/haberler', async (req, res) => {
    try {
        res.render('haberler')

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})


module.exports = Router