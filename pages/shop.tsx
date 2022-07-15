import type {GetServerSideProps, NextPage} from 'next'
import {useContext, useEffect} from "react";
import Stripe from 'stripe';
import ProductCard from "../components/ProductCard";
import CartContext from "../components/context/CartContext";
import Header from "../components/Header";
import styles from '../styles/shop.module.scss'
import styles1 from '../styles/Home.module.scss'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
        apiVersion: '2020-08-27',
    });

    const res = await stripe.prices.list({
        limit: 10,
        expand: ['data.product']
    });

    const prices = res.data.filter(price => {
        return price.active;
    })

    return {
        props: {
            prices
        },
    }
}

type Props = {
    prices: Stripe.Price[]
}

const Home: NextPage<Props> = ({ prices}) => {
    return (
        <section>
            <header>     
                <h1>Velkommen til webshoppen</h1>
                <Header/>
            </header> 

                <article className={styles.shop}>
                    {
                        prices.map(p => (
                            <ProductCard key={p.id} price={p}/>
                        ))
                    }
                </article>
          
      

        </section>
    )
}

export default Home