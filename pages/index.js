import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <form action="/LoginWithLocalStoragepassword" name="Home" method="Post" className={styles.card}>
        <h1 className={styles.title}>
          Sign in
        </h1>
        <div>
          <label className={styles.mobile}>Email or mobile phone number</label>
          <input className={styles.tel} type="tel" name="phone" placeholder="Mobile number" pattern="^\d{10}$" required />
        </div>
        <div className={styles.submit}>
          <button type="submit" name="submit" id="button" >Continue</button>
        </div>
        <div className={styles.conditions}>
          <div>
            By continuing, you agree to Amazon's <Link href="/conditions" className={styles.bold}>Conditions of</Link>
          </div>
          <div>
          <Link href="/conditions" className={styles.bold}>Use</Link> and <Link href="/privacy" className={styles.bold}>Privacy Notice</Link>.
          </div>
          <div>
          <Link href="/help" className={styles.help}>Need help?</Link>
          </div>
        </div>
        
      </form>
      <div className={styles.new}>
        <h5 className={styles.newh5}>New to Amazon?</h5>
      </div>
      <a href="/LoginWithLocalStorage">
        <div className={styles.create}>
          <button className={styles.buton} type="button" name="button" id="create">Create your Amazon account</button>
        </div>
      </a>
    </div>
  )
}
