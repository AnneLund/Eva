import React from "react";
import { slide as Menu } from "react-burger-menu";
import {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const Sidebar = (props) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isMenuOpen, handleMenu] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    fetch('https://database.evadixen.dk/wp-json/menus/v1/menus/main')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
    
      })
   
  }, [])

  if (isLoading) return 
  if (!data) return 

 
  const handleCloseMenu = () => {
    handleMenu(false);
  };

  const handleStateChange = (state) => {
    console.log(state.isOpen)
    handleMenu(state.isOpen);
  };

  return (
  <>
   <Menu 
   onStateChange={handleStateChange}
   isOpen={isMenuOpen}
    {...props} >
 
      <nav className={styles.grid}>
        <ul>

    <li className="menu-item">   
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
        <Link href="/">
       <a onClick = {() => handleCloseMenu()} title="home" >Forside</a> 
      </Link> 
    </li>   


    <li className="menu-item">
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
      <Link href="/about">
        <a onClick = {() => handleCloseMenu()} title="about">{data.items[0].title}</a>
      </Link>
    </li>


    <li className="menu-item">
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
         <Link href="/latest">
         <a onClick = {() => handleCloseMenu()} title="latest">{data.items[1].title}</a>     
        </Link> 
    </li>


    <li className="menu-item">
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
      <Link href="/practices">
          <a onClick = {() => handleCloseMenu()} title="practices">{data.items[2].title}</a>     
      </Link>
    </li>

    <li className="menu-item">
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
      <Link  href="/contact">
          <a title="contact" onClick = {() => handleCloseMenu()}>{data.items[3].title}</a>
      </Link>
   </li>

   <li className="menu-item">
    <Image src="/leaf4li.png" width={25} height={25} className="leaf_menu" />
      <Link href="/shop">
          <a title="shop" onClick = {() => handleCloseMenu()}>Shop</a>
      </Link>
   </li>
</ul>


</nav>

    </Menu>
    </>
    );
};

export default Sidebar;