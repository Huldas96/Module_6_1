import Image from "next/image"

export const getStaticPaths = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/cheeses");
    const data = await res.json();

    const paths = data.map(cheese => {
        return {
            params: {id: cheese.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/cheeses/" + id);
    const data = await res.json();

    return {
        props: { cheese : data }
    }
}

const Details = ({ cheese }) => {
    if (!cheese) return
    
    return ( 
        <div>
            <h3>Cheese Details</h3>
            <h1>{cheese.name}</h1>
            <img src={cheese.pic.url} height={250}/>
            <p>{cheese.desc}</p>

        </div>
    );
}
 
export default Details;