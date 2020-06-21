import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from './Recipe';

const HomePage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [baseUri, setBaseUri] = useState("");
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes(); // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}`
      );
    const data = await response.json();
    setBaseUri(data.baseUri);
    setRecipes(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="container-fluid">

        <h3 className="text-center">Start your own cooking today</h3>
        <form className="search-form" onSubmit={getSearch}>
            <input className="search-bar" type="text" 
            value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
        
        <div className="row">
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                readyInMinutes={recipe.readyInMinutes}
                baseUri={baseUri}
                image={baseUri.concat(recipe.image)}
                />
            ))}
        </div>
    </div>
  )

}

export default HomePage;