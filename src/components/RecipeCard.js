import React from 'react';

const RecipeCard = ({recipe}) => {
    const containers = Object.values(recipe.container).map((item, i) => <span><span key={i} className={item.color.toLowerCase()}></span> {item.count}</span>);

    // const vegan = Object.values(recipe.container_vegan).map((item, i) => <span><span key={i} className={item.color.toLowerCase()}></span> {item.count}</span>);

    const dietary = recipe.dietary.join(", ").length > 0 ? <div><strong>Dietary:</strong> {recipe.dietary.join(", ")}</div> : '';

    return (
        <div className="recipe">
            <h2>{recipe.title}</h2>
            <div className="containers">{containers}</div>
            <div><strong>Category:</strong> {recipe.category}</div>
            {dietary}
            <div><strong>Source:</strong> {recipe.source.join(", ")}</div>
        </div>
    );
}

export default RecipeCard;