import React from 'react'
import {render, fireEvent, waitFor, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import ContinentsCache from './ContinentsCache';
import { CONTINENTS_QUERY } from '../lib/queries';
import { MockedProvider } from '@apollo/client/testing';


it('should render all the continents', async () => {

     const props = {
         continents : [
             {
                 code: 'NA',
                 name: 'North America'
             },
             {
                 code: 'SA',
                 name: 'South america'
             },
             {
                 code: 'EU',
                 name: 'Europe'
             }
         ]
     };

     const mock = {
        request: {
          query: CONTINENTS_QUERY,
        },
        result: {
          data: props,
        },
      };

      render(
        <MockedProvider mocks={[mock]} addTypename={false}>
            <ContinentsCache />
        </MockedProvider>,
        )
  
    await new Promise(resolve => setTimeout(resolve, 0));

    for (const element of props.continents) {
        expect(screen.getByText(element.name)).toBeInTheDocument();
    }
    
  })
  