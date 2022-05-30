const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Recipe');

mongoose.connect(keys.mongoURI);
const Recipe = mongoose.model('recipes');

const app = express();

app.get('/api/recipes', async (req, res) => {
    const recipes = await Recipe.find({});

    let recipeMap = {};
    recipes.forEach((recipe) => {
        recipeMap[recipe._id] = recipe;
    });

    res.send(recipeMap);
});

PORT = 50000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
