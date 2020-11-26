import React from 'react';

const RecipeCard = ({recipe}) => {
    const image = recipe.image ? recipe.image.src : 'placeholder.jpg';
    const imageAuthor = recipe.image ? `Photo Credit: ${recipe.image.author}` : '';

    const containers = Object.values(recipe.container).map((item, i) => <span><span key={i} className={item.color.toLowerCase()}></span> {item.count}</span>);

    let containersVegan = "";
    if ( recipe.container_vegan ) {
        containersVegan = (
            <div className="containers-vegan">
                <strong>Vegan:</strong>
                {Object.values(recipe.container_vegan).map((item, i) => {
                    let value = "";
                    switch (item.color) {
                        case "Yellow A": 
                            value = "A";
                            break;
                        case "Yellow B":
                            value = "B";
                            break;
                    }
                    return <span><span key={i} className={item.color.toLowerCase()}>{value}</span> {item.count}</span>
                })}
            </div>
        );
    }

    const category = recipe.category.join(", ").length > 0 ? <div><strong>Category:</strong> {recipe.category.join(", ")}</div> : '';
    const dietary = recipe.dietary.join(", ").length > 0 ? <div><strong>Dietary:</strong> {recipe.dietary.join(", ")}</div> : '';
    const source = recipe.source.map(el => el == "Blog" && recipe.link ? <a href={recipe.link} target="_blank">Blog</a> : el).reduce((prev, curr) => [prev, ', ', curr]);

    return (
        <div className="recipe">
            <img src={'/images/' + image} alt={recipe.title} title={imageAuthor}/>
            <h2>{recipe.title}</h2>
            <div className="containers">{containers}</div>
            {containersVegan}
            {category}
            {dietary}
            <div><strong>Source:</strong> {source}</div>
        </div>
    );
}

export default RecipeCard;