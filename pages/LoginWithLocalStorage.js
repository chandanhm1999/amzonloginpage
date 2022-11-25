import React, { useRef } from 'react';
import styles from '../styles/createacc.module.css'

import Link from 'next/link'
function LoginWithLocalStorage(){
    const tel=useRef()
    const password=useRef()
    const handleSubmit=()=>{
        if(tel.current.value=="8105114625"&&password.current.value=="8105114625"){
            localStorage.setItem("telData", "8105114625");
            localStorage.setItem("passwordData", "8105114625");
        }
    }

    return (
        <div>
            <form action="/Thankyou" onSubmit={handleSubmit} name="createaccount" method="Post" data-netlify="'true" className={styles.card}>
                <p className={styles.title}>
                Create Account
                </p>
                <p>
                <label className={styles.your}>Your name</label>
                <input className={styles.name} type="name" id="name" name="name" placeholder="First and last name" pattern="[a-zA-Z0-9]+" minLength="4" maxLength="10" required />
                </p>
                <p>
                <label className={styles.mobile}>Mobile number</label>
                <input className={styles.tel} type="tel" id="mobile" ref={tel} name="phone" placeholder="Mobile number" pattern="^\d{10}$" required />
                </p>
                <p>
                <label className={styles.mail}>Email (optional)</label>
                <input className={styles.email} type="email" name="email" placeholder="Email" pattern=".+@gmail\.com" required />
                </p>
                
                <div>
                <label className={styles.pass}>Password</label>
                    <input className={styles.password} name="password" ref={password} type="password" placeholder="At least 6 characters" minLength="6" maxLength="10" required />
                </div>
                <p className={styles.word}>
                    Passwords must be at least 6 characters.
                </p>
                <p className={styles.account}>
                    By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p>
                <p className={styles.submit}>
                    <button type="submit" name="submit" id="button" >Continue</button>
                </p>
                <div className={styles.sign}>
                    <div>
                        Already have an account? 
                        <Link href="http://localhost:3000/"><b>Sign in</b></Link>
                    </div>
                    <div>
                        Buying for work? <b>Create a free business account</b>
                    </div>
                </div>

                <div className={styles.conditions}>
                    <div>
                        By creating an account or logging in, you agree to
                    </div>
                    <div>
                        Amazon’s <b>Conditions of Use</b> and <b>Privacy Policy.</b>
                    </div>
                </div>
            </form> 
        </div>
    );
}


export default LoginWithLocalStorage;