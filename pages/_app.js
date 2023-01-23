import '../styles/globals.css'
import Navbar from '../comps/nav';
import axios from 'axios';

function MyApp({ Component, pageProps }) {

  const axios = require('axios');
  const params = {
    access_key: '893152ff4c97608e3c1affe8432ac063',
    query: 'Virginia'
  }

  axios.get('https://api.weatherstack.com/current', {params})
    .then(response => {
      const apiResponse = response.data;
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
      console.log(error);
    });


  return (
    <div>
      <Navbar/> 
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
