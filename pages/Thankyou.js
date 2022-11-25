import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Thankyou = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            // router.go(1)
            router.push('/');
        }, 4000)
    }, [])

    return (
        <div className="not-found">
            <h1>Thanks for Registering</h1>
            <h2>Amazon</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}
 
export default Thankyou;