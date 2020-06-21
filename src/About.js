import React from 'react';
import AboutImage from './assets/about.png';

const About = () => {
    return (
        <div className="container">
            <h1>Our Mission</h1>
            <p>
            Recipe Finder will be the first food management system that combines dining out, eating store-bought food, and cooking at home to help you find and organize the restaurants, products, and recipes that fit your diet and can help you reach your nutrition goals.
            </p>
            <div className="text-center">
                <img src={AboutImage} alt="about us image"/>
            </div>
            <p>
                As a Recipe Finder user, you can already add your favorite recipes and store bought products to our <b>free meal planner</b>, which automatically generates your shopping list and calculates the nutritional information for you. Whether you're cooking from scratch or picking something up at the store, our meal planner doubles as a <b>food tracker</b> that counts your calories, protein, fat, carbs, sugar, and other nutrients for you.
            </p>
            <p>
                With our <b>food search engine</b>, you will soon find everything from "protein shake with 20 grams of protein" to "best vegan restaurant in Chicago" to "Paleo brownie recipes."
            </p>
            <p>
                We want to make Recipe Finder the only site you need when it comes to the food you eat.
            </p>
            <p className="mb-0">
                <b>All your food. One place.</b>
            </p>
        </div>
    );

}

export default About;