import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Votre Panier est vide</h2>
                        <p>Vous n'avez pas de produit dans votre panier. Pour acheter un ou plusieurs produits, appuyer sur le bouton "Ajouter au panier" à coté du produit.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Votre panier</h2>
                        {basket?.map(item => (
                            <CheckoutProduct 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
