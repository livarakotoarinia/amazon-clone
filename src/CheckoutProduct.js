import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small><sup>€</sup></small>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        //   Loop and Show the number of star the product got
                        Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Supprimer du panier</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
