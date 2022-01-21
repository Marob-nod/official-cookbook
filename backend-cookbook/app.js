const express = require('express')
const dataRecipes = require('./data/recipes')
const mongoose = require('mongoose')
const app = express()
const Recipe = require('./models/recipe')

mongoose.connect('mongodb+srv://Marob-nod:RYLIegre2+5+@cluster0.5lamp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/recipes', (req, res, next) => {
    const recipe = new Recipe({
        ...req.body
    })
    recipe.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(err => res.status(400).json({ err }))
})

app.get('/recipes', (req, res, next) => {
    res.status(200).json(dataRecipes)
})

module.exports = app