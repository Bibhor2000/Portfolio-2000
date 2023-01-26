import '../styles/globals.css'
import {React, useState, useEffect} from 'react';
import Navbar from '../comps/nav';

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Navbar/> 
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
