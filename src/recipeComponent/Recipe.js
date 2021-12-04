import React from 'react';
import './Recipe.css'

const Recipe = ({title, image, shareAs, ingredientLines}) => {
    return(
        <div className="recipe-card">
            <div className="card">
                <h1>{title}</h1>
                <img src={image} alt="recipeImage" />
                <p>Ingredients:</p>
                {ingredientLines.map(ingredient => (
                    <li className="ingredient">{ingredient}</li>
                ))}

                <p>See the full recipe&nbsp; 
                    <a 
                        className="link" 
                        href={shareAs}
                        target="_blank"
                        rel="noopener noreferrer"
                        >here</a>
                    </p>

            </div>
            <div className="tabIcon"></div>
            <div className="tabIcon-circ"></div>
        </div>

    );
}

export default Recipe;