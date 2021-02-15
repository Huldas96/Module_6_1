import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3500)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oh no :(</h1>
            <h2>That page cannot be found</h2>
            <p>Go back <Link href="/"><a>Home</a></Link></p>
        </div>

    );
}
 
export default NotFound;