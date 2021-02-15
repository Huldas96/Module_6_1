import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href="/" ><a><Image src="/logo_cheezit.png" width={125} height={100} /></a></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/cheeses"><a>Cheeses</a></Link>
        </nav>
    );
}
 
export default Navbar;