import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/13')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
  if (isLoading) return <Loading/>
  if (!data) return 

    return(

<section className={styles.main}>
<h1>{data.title.rendered}</h1>
<ContactForm/> 
</section>
    )
}


export default Contact;