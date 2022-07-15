import {FunctionComponent, useContext} from "react";
import { Fragment } from 'react'
import styles from '../styles/shop.module.scss'
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import CartContext from "./context/CartContext";
import {Stripe} from "stripe";
import {getPriceTotal, getProductDescription, getProductImage, getProductName} from "../utils/computed";

const Header: FunctionComponent = () => {
    const {items, remove} = useContext(CartContext);
    const removeFromCart = (priceID: string) => {
        if(remove) {
            remove(priceID)
        }
    }

    const checkout = async () => {

        const lineItems = items?.map(price => {
            return {
                price: price.id,
                quantity: 1
            };
        });

        const res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify({lineItems: lineItems})
        });

        const b = await res.json()
        window.location.href = b.session.url;


        // const session = await stripe.checkout.sessions.create({
        //     success_url: 'http://localhost:3000/success',
        //     cancel_url: 'http://localhost:3000/cancel',
        //     line_items: lineItems,
        //     mode: 'payment',
        // });

        // console.log('here')
    }

    return (
        <header className={styles.header}>
               
                            <Popover >
                                <Popover.Button className={styles.popcon}>
                                    <ShoppingBagIcon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{items?.length}</span>
                                    <span className="sr-only"> varer i kurv</span>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel className={styles.popover}>
                                        <h2 className="sr-only">Indkøbskurv</h2>

                                        <div className={styles.popoverPanel}>
                                            <ul className={styles.shopcard}>
                                                {items?.map((price) => (
                                                    <li key={price.id} className={styles.li} >
                                                        
                                                            <img
                                                                src={getProductImage(price.product)}
                                                                alt={getProductDescription(price.product)}
                                                                className="w-full h-full object-center object-cover"
                                                            />
                                                       

                                                        <div className="ml-4 flex-1 flex flex-col">
                                                          
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        {getProductName(price.product)}
                                                                    </h3>
                                                                    <p className="ml-4">DKK {getPriceTotal(price)}</p>
                                                                </div>
                                                           
                                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                                <div className="flex">
                                                                    <button onClick={e => removeFromCart(price.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                        Fjern
                                                                    </button>
                                                                    
                                                                </div>
                                                                <button
                                                onClick={checkout}
                                                className={styles.checkout}
                                            >
                                                Til betaling
                                            </button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                ))}
                                            </ul>

                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover> 
            
        </header>
    );
};

export default Header;