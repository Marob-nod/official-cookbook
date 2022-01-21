const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    prepTime: { type: Number, required: true },
    serves: { type: Number, required: true },
    level: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
})

module.exports = mongoose.model('Recipe', recipeSchema)