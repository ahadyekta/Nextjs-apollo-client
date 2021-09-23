import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Continents from './Continents';


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

    render(<Continents {...props} />)
  
    
    for (const element of props.continents) {
        expect(screen.getByText(element.name)).toBeInTheDocument();
    }
  })
  