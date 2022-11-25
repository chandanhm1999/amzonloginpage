import Link from 'next/link'

const Amazonhomepage = () => {
    return (
        <div className="not-found">
            <h1>Thanks for Registering</h1>
            <p>Go back to the <Link href="/">Homepage</Link></p>
            <Link href="https://www.amazon.in/s?k=-amazon&hvadid=72499339022605&hvbmt=be&hvdev=c&hvqmt=e&tag=msndeskstdin-21&ref=nav_custrec_signin">Amazon</Link>
        </div>
    );
}
 
export default Amazonhomepage;