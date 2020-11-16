import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>Sous-total ({basket.length} produit(s)): <strong>{` ${value}`}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> Cette commande contient un cadeau
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button>Procéder à l'achat</button>
        </div>
    )
}

export default Subtotal
