import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Food = (props) => {
    const { strMeal, strInstructions, strMealThumb} = props.food;
    const {handleAddToCart} = props;
    return (
      <div class="row">
        <div class="col-12 col-lg-4 col-md-6 mt-3 card">
          <img src={strMealThumb} class="card-img-top rounded-circle m-2" alt="FoodThumb" />
          <div class="card-body">
            <h5 class="card-title">Food Name:- {strMeal}</h5>
            <p class="card-text">
              Ingredients: {strInstructions.slice(0, 150)} More...
            </p>
            <button onClick={()=>handleAddToCart()} class="btn btn-primary">
              ADD To Cart <FaShoppingCart />
            </button>
          </div>
        </div>
        </div>
    );
};

export default Food;