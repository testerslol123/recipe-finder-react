import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Recipe.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = ({id, baseUri, title, readyInMinutes, image}) => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getIngredients(); // eslint-disable-next-line
    }, []);

    
    const getIngredients = async () => {
        await axios.get(`
        https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}
        `).then(function(datas) {
            setIngredients(datas.data.ingredients)
        });
    };

    return (
        <div className="col-md-3 mb-3">
            <div class="card">
                <img src={image} alt={title} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Ready in {readyInMinutes} Minutes</p>
                    <p class="card-text">
                        Ingredients:
                        <ol>
                            {ingredients.map(ingredient => (
                                <li>
                                    {ingredient.name}
                                </li>
                            ))}
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Recipe;