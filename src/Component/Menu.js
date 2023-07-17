import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const recipes = [
    {
      id: 1,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and eggs',
      image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'Spicy curry with tender chicken',
      image: 'https://www.allrecipes.com/thmb/cF4D_jCqxkPpjg08TdHXk1E-3nM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-indian-chicken-curry-murgh-kari-DDMFS-4x3-330302d59ca64543b3d7ead88c226f9a.jpg',
    },
    {
      id: 3,
      name: 'Vegetable Stir-Fry',
      description: 'Colorful stir-fried vegetables',
      image: 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/colorful-vegetable-stirfry-676699.jpg',
    },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h1>Menu</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;