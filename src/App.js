import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipeComponent/Recipe.js'; 
import logo from './recipe.png'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pie')


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
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <h1 className="page-title">Welcome to the Recipe Book</h1>
      <img className="logo" src={logo} alt="" />
      <h4>The following recipes are provided by Edamam API, search any word to get new results.</h4>
      <form onSubmit={getSearch} className="search-form">
        <input 
          type="text" 
          className="search-bar"
          placeholder={query.charAt(0).toUpperCase() + query.slice(1)} 
          value={search} 
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="grid-card">
        {recipes.map(recipe => (
          <Recipe 
            key={Math.random()}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            shareAs={recipe.recipe.shareAs}
            ingredientLines={recipe.recipe.ingredientLines}
            >

          </Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
