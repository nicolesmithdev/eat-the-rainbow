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

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets (i.e. bundle.js, main.css)
    app.use(express.static('client/dist'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

const PORT = process.env.PORT || 50000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
