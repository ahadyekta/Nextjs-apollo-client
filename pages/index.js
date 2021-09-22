import gql from 'graphql-tag';
import Head from 'next/head'
import Image from 'next/image'
import Continents from '../components/Continents';
import ContinentsCache  from '../components/ContinentsCache';
import Footer from '../components/Footer';
import Languages from '../components/Languages';
import { initializeApollo } from '../lib/apolloClient';
import { CONTINENTS_QUERY } from '../lib/queries';
import styles from '../styles/Home.module.css'


export default function Home({continents}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      


        <h3>All continents (props SSR)</h3>
        <Continents continents={continents}/>


<hr />

        <h3>All continents (apollo cache SSR)</h3>
        <ContinentsCache />


      <hr />
      <div>
        <h3>Languages, Client side rendering</h3>
        <Languages />
      </div>



      </main>

      <Footer  />
    </div>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data: continents } = await apolloClient.query({
    query: CONTINENTS_QUERY,
  });


  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      continents: continents.continents
    },
  };
}
