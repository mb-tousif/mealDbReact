import React, { useEffect, useState } from 'react';
import './Foods.css';
import Food from './food/Food';
import Cart from './cart/Cart';

const Foods = () => {
    const [foods,setFoods] = useState([]);
    const { idMeal } = foods;
    const [cart, setCart] = useState([]);
    // console.log(cart);
    useEffect(()=>{
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[]);
     const handleAddToCart = (food) => {
      //  console.log(food);
      const newCart = [...cart, food]
      setCart(newCart);
      console.log(cart);
     };
    return (
      <div className="foods">
        <div className="container">
          {foods.map((food) => (
            <Food
              key={idMeal}
              food={food}
              handleAddToCart={handleAddToCart}
            ></Food>
          ))}
        </div>
        <div className="p-3 bg-info order">
          <Cart cart= {cart}></Cart>
        </div>
      </div>
    );
};

export default Foods;