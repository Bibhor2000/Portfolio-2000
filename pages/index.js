import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import styles from '../styles/Home.module.css';
import animateStyles from '../styles/animation.module.css';
import ReactWeather from 'react-open-weather';

export default function Home() {

  const [date, setDate] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDate(new Date()), 30000);
  }, []);

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // console.log(process.env.NEXT_PUBLIC_API_KEY)
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])

  // const dw = data.weather.map((ele, index) =>{
  //   <div key={index} id={ele.id}>{ele}</div>
  // });

  // console.log(data)
  // console.log(data.weather)

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
            {date.toLocaleDateString('en-GB', {
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
          {data?.weather&&<div className={styles.appweather}>
            <div>Current Latitude: {lat}</div>
            <div>Current Longitude: {long}</div>
            <div>Current Temperature is: {data.main.temp}°C</div>
            <div>{data.weather[0]['description']}</div>
            <div>Winds are blowing at {data.wind.speed}mph</div>
          </div>
          }
        </div>
      </div>

      <div class=''>
        <ul >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
