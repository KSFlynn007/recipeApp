import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipeComponent/Recipe.js';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')


  const APP_ID = 'cd825116';
  const APP_KEY = '4c87fbb545c8a9d7722d1716bbb4a974';

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    // alternate to fetch().then syntax
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(query);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          type="text" 
          className="search-bar" 
          value={search} 
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={Math.random()}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}>

        </Recipe>
      ))}
    </div>
  );
}

export default App;
