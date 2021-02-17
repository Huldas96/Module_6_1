import Head from "next/head"
import styles from "../../styles/Cheeses.module.css"
import Link from "next/link"

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/cheeses/");
    const data = await res.json();

    return {
        props: {cheeses: data},
        revalidate : 1
    }
}

const Cheeses = ({ cheeses }) => {
    return ( 
        <>
            <Head>
            <title>Cheezit | Cheeses</title>
            </Head>
            <div>
                <h1>Cheeses</h1>
                {cheeses.map(cheese => (
                    <Link href={"/cheeses/" + cheese.id} key={cheese.id}>
                        <a className={styles.single}>
                            <h3>{ cheese.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Cheeses;