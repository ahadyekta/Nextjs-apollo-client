import Head from 'next/head'
import Footer from '../components/Footer';
import Languages from '../components/Languages';
import styles from '../styles/Home.module.css'

export default function Langs() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Langs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h3>Languages (client side rendering)</h3>
      <Languages />

      </main>

      <Footer  />
    </div>
  )
}