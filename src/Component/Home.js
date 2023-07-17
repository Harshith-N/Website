import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Welcome to Food Recipe Website</h1>
        <p>Explore and discover delicious recipes from around the world.</p>
       
      </div>
      <img
        src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/07/15/Pictures/_70d6897a-c66b-11ea-be81-f7b2e356804f.jpg"
        alt="Food"
        className="homepage-image"
      />
    </div>
  );
};

export default HomePage;