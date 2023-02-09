import '../styles/globals.css'
import {React, useState, useEffect} from 'react';
import Navbar from '../comps/nav';

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Navbar/> 
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
