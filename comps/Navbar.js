import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpeg" width={128} height={25} />
            </div>
        </nav>
    );
}
 
export default Navbar;