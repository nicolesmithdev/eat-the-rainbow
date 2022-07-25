import React from 'react';

const RecipeCard = ({ recipe }, index) => {
    const image = recipe.image ? recipe.image.src : 'placeholder.jpg';
    const imageAuthor = recipe.image
        ? `Photo Credit: ${recipe.image.author}`
        : '';

    const containers = Object.values(recipe.container).map((item, i) => (
        <span key={i}>
            <span className={item.color.toLowerCase()}></span> {item.count}
        </span>
    ));

    let containersVegan = '';
    if (recipe.container_vegan) {
        containersVegan = (
            <div className="containers containers-vegan">
                <strong>Vegan:</strong>
                {Object.values(recipe.container_vegan).map((item, i) => {
                    let value = '';
                    switch (item.color) {
                        case 'Yellow A':
                            value = 'A';
                            break;
                        case 'Yellow B':
                            value = 'B';
                            break;
                    }
                    return (
                        <span key={i}>
                            <span className={item.color.toLowerCase()}>
                                {value}
                            </span>{' '}
                            {item.count}
                        </span>
                    );
                })}
            </div>
        );
    }

    let containersGut = '';
    if (recipe.container_gut) {
        containersGut = (
            <div className="containers containers-gut">
                <strong>Gut Protocol:</strong>
                {Object.values(recipe.container_gut).map((item, i) => {
                    let value = '';
                    switch (item.color) {
                        case 'Red A':
                        case 'Yellow A':
                            value = 'A';
                            break;
                        case 'Red B':
                        case 'Yellow B':
                            value = 'B';
                            break;
                    }
                    return (
                        <span key={i}>
                            <span className={item.color.toLowerCase()}>
                                {value}
                            </span>{' '}
                            {item.count}
                        </span>
                    );
                })}
            </div>
        );
    }

    const category =
        recipe.category.join(', ').length > 0 ? (
            <div>
                <strong>Category:</strong> {recipe.category.join(', ')}
            </div>
        ) : (
            ''
        );
    const dietary =
        recipe.dietary.join(', ').length > 0 ? (
            <div>
                <strong>Dietary:</strong> {recipe.dietary.join(', ')}
            </div>
        ) : (
            ''
        );
    const source = recipe.source
        .map((el, i) =>
            el == 'Blog' && recipe.link ? (
                <a key={i} href={recipe.link} target="_blank">
                    Blog
                </a>
            ) : (
                el
            )
        )
        .reduce((prev, curr) => [prev, ', ', curr]);

    return (
        <div key={index} className="recipe">
            <img
                src={`/images/` + image}
                alt={recipe.title}
                title={imageAuthor}
            />
            <h2>{recipe.title}</h2>
            <div className="containers">{containers}</div>
            {recipe.container_vegan.length > 0 ? containersVegan : null}
            {recipe.container_gut.length > 0 ? containersGut : null}
            {category}
            {dietary}
            <div>
                <strong>Source:</strong> {source}
            </div>
        </div>
    );
};

export default RecipeCard;
