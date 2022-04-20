const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: String,
    image: Object,
    category: Array,
    container: Array,
    container_vegan: Array,
    container_gut: Array,
    dietary: Array,
    source: Array,
});

mongoose.model('recipes', recipeSchema);
