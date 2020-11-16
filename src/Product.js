import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small><sup>€</sup></small>
        </p>
        <div className="product__rating">
          {
            //   Loop and Show the number of star the product got
            Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))
          }
        </div>
      </div>
      
      <img src={image} alt="" />
      <button onClick={addToBasket}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
