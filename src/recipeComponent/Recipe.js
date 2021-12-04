import React from 'react';
import './Recipe.css'

const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Calories: {calories.toFixed(0)}</p>
            <img src={image} alt="recipeImage" />
        </div>
    );
}

export default Recipe;