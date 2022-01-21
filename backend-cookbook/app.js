const express = require('express')
const app = express()
const dataRecipes = require('./data/recipes')

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/recipes', (req, res, next) => {
    console.log(req.body)
    res.status(201).json({
        message: 'Recette créée !!!'
    })
})

app.get('/recipes', (req, res, next) => {
    res.status(200).json(dataRecipes)
})

module.exports = app