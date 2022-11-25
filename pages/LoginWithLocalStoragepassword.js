import React, { useRef } from 'react';
import styles from '../styles/password.module.css'

import Link from 'next/link'

function LoginWithLocalStoragepassword(){
  const password=useRef()
  const handleSubmit=()=>{
      if (password.current.value=="chandan"){
       var res= localStorage.getItem("passwordData");
        document.write(res);
      }
  }  

    return (
      <div>
          <form onSubmit={handleSubmit} action="" name="Home" method="Post" className={styles.card}>
            <h1 className={styles.title}>
              Sign in
            </h1>
            <div>
              <label className={styles.mobile}>Password</label>
              <label className={styles.pass}>Forgot Password</label>
              <input className={styles.tel} ref={password} type="password" name="pasword" placeholder="Password" minLength="6" maxLength="10" required />
            </div>
            <div className={styles.submit}>
              <button type="submit" name="submit" id="button" >Sign in</button>
            </div>
            <div className={styles.conditions}>
              <input type="checkbox" name="rememberMe" value="true" tabIndex="4" />
              <label for="signed" className={styles.check}>Keep me signed in.</label>
              <select id="signed" className={styles.signedd}>
                <option>Details</option>
              </select>
            </div>
          </form>
        <div className={styles.new}>
          <h5 className={styles.newh5}>or</h5>
        </div>
        <a href="/createaccount">
          <div className={styles.create}>
            <button className={styles.buton} type="button" name="button" id="create">Get an OTP on your phone</button>
          </div>
        </a>
    </div>
    );
}
 
export default LoginWithLocalStoragepassword;