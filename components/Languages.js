import { useQuery } from '@apollo/client';
import React from 'react'
import {  LANGUAGES_QUERY } from '../lib/queries';

const Languages = () => {
    const { data, loading, error } = useQuery(LANGUAGES_QUERY);

    
  if (loading) {
    return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"></a>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const languages = data.languages && data.languages.slice(0, 5);

  return (

    <ul >
        {languages && languages.map((lg) => (
        
            <li key={lg.code}>
                {lg.code} - {lg.name}
            </li>

        ))}
    </ul>
  );
}

export default Languages;