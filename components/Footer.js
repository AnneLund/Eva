import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  
    return(
  <footer className={styles.footer}>
<p>Kontaktoplysninger</p>
<Link href="/privacy">Persondata-politik</Link>
<p><FaCopyright/><span>Copyright 2022</span></p>
</footer>
)
}

export default Footer;