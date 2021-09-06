import React,{useState} from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({children}) => {
    
    const [selectedPokemon,setSelectedPokemon] = useState(null);
    const [language,setLanguage] = useState('es');
    const [selectedSpecies,setSelectedSpecies] = useState('');
    const [totalPages,setTotalPages] = useState(0);

   
    return ( 
        <PokemonContext.Provider
            value={{
                selectedPokemon,
                language,
                selectedSpecies,
                totalPages,
                setSelectedPokemon,
                setLanguage,
                setSelectedSpecies,
                setTotalPages
            }}
        >

            {children}
        </PokemonContext.Provider>
     );
}
 
export default PokemonProvider;

