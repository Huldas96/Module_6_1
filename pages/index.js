import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheezit | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.text}>Cheese, nutritious food consisting primarily of the curd, the semisolid substance formed when milk curdles, or coagulates. Curdling occurs naturally if milk is not used promptly: it sours, forming an acid curd, which releases whey, a watery fluid containing the soluble constituents; and it leaves semisolid curd, or fresh cheese. In some areas, cheese is still made simply by allowing milk to curdle naturally, or by mixing milk with juices or extracts that reduce it to curds and whey. A brief treatment of cheese follows.</p>
        <p className={styles.text}>Cheese making probably originated soon after humans first took milk from wild or domesticated animals. The Bible refers to “cheese of the herd” being given to King David. Milk from cows, and presumably from other animals, was used for cheese making by about 1000 BCE. The ancient Greeks and Romans knew and valued cheese, as did early people in northern Europe. Methods for cheese making have often been kept secret.</p> <p className={styles.text}>Important as a preservation technique, cheese making reduces about 10 volumes of milk to one volume of cheese. The curd, or soft gel, is formed by the chief protein in milk, casein, when enough lactic acid is developed from lactose (milk sugar) by the microorganisms present in the milk or when it is acted upon by rennin. Rennin is an enzyme usually obtained from the stomach of young calves in a brine extract called rennet. At the moment of coagulation, all the milk constituents, including most of the fat, casein, and other water-insoluble substances, are contained in the curd. The curd is cut or broken to release the whey, but a portion of the whey is always retained in the curd.</p>
        <a>https://www.britannica.com/topic/cheese</a>
        <Link href="/cheeses">
          <a className={styles.btn}>See List of Cheeses</a>
          </Link>
      </div>
    </>
  )
}
