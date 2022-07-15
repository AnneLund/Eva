import {FunctionComponent, useContext} from "react";
import Stripe from "stripe";
import CartContext from "./context/CartContext";
import {getPriceTotal, getProductDescription, getProductImage, getProductName} from "../utils/computed";
import styles from '../styles/shop.module.scss'

type CardProps = {
    price: Stripe.Price
}

const ProductCard: FunctionComponent<CardProps> = ({price}) => {
    const {add} = useContext(CartContext)

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p)
        }
    }

    return (
        <div>
            <div className={styles.card}>
               
                    <img
                        src={getProductImage(price.product)}
                        alt={getProductDescription(price.product)}
                    />
            
                    <h3>{getProductName(price.product)}</h3>
              
                <div >
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                        DKK {getPriceTotal(price)}
                    </p>
                </div>
            </div>
            <div>
                <button
                    onClick={() => addToCart(price)}
                    >
                    Tilføj<span> {getProductName(price.product)}</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;