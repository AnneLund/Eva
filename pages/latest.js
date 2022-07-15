import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Image from 'next/image'

const Latest = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/96')
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
    <article>
        {data.yoast_head_json.og_description}
        {/* <figure className={styles.figure}>
            <picture>
                <Image src="/bog.jpg" alt='sometespeloev' width={300} height={400}/>    
            </picture>

            <figcaption>
                <h4>Som et espeløv - En lille bog om traumer, og hvordan man ryster dem af sig</h4>
            <p>Som 21-årig bliver Eva udsat for et overgreb. Et overgreb, hun forsøger at fortrænge, men som bider sig fast i hendes krop.</p>
            <p>
                Da det først mange år senere går op for hende, at der kan være en forbindelse imellem de muskelspændinger, hun dagligt tynges af, 
                og det gamle ubearbejdede traume, tvinger det hende til at forholde sig til alt det, hun helst vil glemme. 
            </p>
            <p>
                For hvis hendes krop virkelig er fanget i et gammelt traume, hvordan slipper hun den så fri? 
                Hvordan overbeviser hun den om, at den ikke længere er i fare?
            </p> 
            <Link href="https://muusmann-forlag.dk/som-et-espeloev/?fbclid=IwAR03kCrW6vsEZeDWHnyofq_wVuOGeVyW6hg0Z7eUOPkjzr_-dT16Wb59Bw4">
               <a title='read-more'>Læs mere</a>
                </Link>
             </figcaption>
             
   
        </figure> */}


        <Link href="https://buy.stripe.com/28ocNG4Xb4mV0GA6oo">Køb</Link>
    </article>
</section>
    )
}


export default Latest;