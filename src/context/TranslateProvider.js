
import React from 'react'
import TranslateContext from './TranslateContext';


const TranslateProvider = ({children}) => {

    const paginatorValues = {
        next:'next',
        prev:'prev'
    }

    const pokeDetails ={
        pokeAbilities:'pokeAbilities',
        description:'description',
        specieLoading:'specieLoading',
        descLoading:'descLoading'
    }

    const hero = {
        title:'title'
    }
    
    return ( 

        <TranslateContext.Provider
            value={{
                paginatorValues,
                pokeDetails,
                hero
            }}
        >

            {children}
        </TranslateContext.Provider>
     );
}
 
export default TranslateProvider;