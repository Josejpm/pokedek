import React,{useState} from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({children}) => {
    
    
    
    
    return ( 
        <PokemonContext.Provider
            value={{}}
        >

            {children}
        </PokemonContext.Provider>
     );
}
 
export default PokemonProvider;

