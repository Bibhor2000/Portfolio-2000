import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className={styles.appcontainer}>
      <div>
        <div className={styles.appheading}>
          <h2>I'm Bibhor.</h2>
          <h1>I'm a Full-Stack developer<br></br>
          with experience in Front-End<br></br>
          & Back-End frameworks.
          </h1>
          <h3>Most of my current experience is in React.JS, Express.JS, & Node.JS</h3>
        </div>

        <div className={styles.appfooter}>
          <h2>Visit me elsewhere</h2>
        </div>

        <div className={styles.applinks}>
          <Link href='https://github.com/Bibhor2000?tab=repositories'>
            <button className={styles.appfooterbuttons}>Github</button>
          </Link>
          <Link href='https://www.linkedin.com/in/bibhor2000/'>
            <button className={styles.appfooterbuttons}>LinkedIn</button>
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div className={styles.appcalender}>
            {' '}
            {dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            })}
          </div>
          <div className={styles.appclock}>
            <Clock
            format={'h:mm:ssa'}
            style={{fontSize: '1em'}}
            ticking={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}
