import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Languages from '../components/Languages';
import styles from '../styles/Home.module.css'

export default function Langs() {

  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        // handle success
        setBtcPrice(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin price (CSR, Rest API)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Bitcoin price (CSR, Rest API)</h1>
        {
          !btcPrice ? (<h3>Loading...</h3>) :

          <div>
            <h3>{btcPrice.chartName}</h3>
            {
              Object.values(btcPrice.bpi).map(({code, rate}) => {
                return (<p key={code}>{`${code} : ${rate}`}</p>)
              })
            }
          </div>
        }

      </main>

      <Footer  />
    </div>
  )
}