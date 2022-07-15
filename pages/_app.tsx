import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import CartContext, {CartContextProps} from "../components/context/CartContext";
import '../styles/Home.module.scss'
import '../styles/leafs.scss'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import {useEffect, useState} from "react";
import _ from "lodash";
import {Stripe} from "stripe";

function MyApp({Component, pageProps}: AppProps) {
    const [items, setItems] = useState<Stripe.Price[]>([]);

    const remove = (priceID: string) => {
        let i = _.reject(items, function (item) {
            return item.id === priceID;
        });
        setItems(i)
    }

    const add = (product: Stripe.Price) => {
        let i = _.union(items, [product]);
        setItems(i)
    }

    const cartContext: CartContextProps = {
        items: items,
        add: add,
        remove: remove
    }


    return (
      <Layout>
        <CartContext.Provider value={cartContext}>
            <Component {...pageProps} />
        </CartContext.Provider>
        </Layout>
    )
}

export default MyApp
