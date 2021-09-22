import { useQuery } from '@apollo/client';
import React from 'react'
import { CONTINENTS_QUERY } from '../lib/queries';
import styles from '../styles/Home.module.css'
import Continent from './Continent';


const ContinentsCache = () => {
    const { data, loading, error } = useQuery(CONTINENTS_QUERY);

    
  if (loading) {
    return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const continents = data.continents;

  return (

    <ul>
        {continents && continents.map((continent) => (
        
            <li key={continent.code}>
                <Continent key={continent.code} continent={continent}/>
            </li>

        ))}
    </ul>
  );
}

export default ContinentsCache;