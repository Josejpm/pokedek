import React,{Fragment, useEffect,useState} from 'react';
import axiosClient from '../../config/axios';

import PokemonCard from '../PokeCard/PokemonCard';

const PokemonList = ({page}) => {

    const [results,setResults] = useState([]);

    useEffect(() => {
        const apiCall = async ()=>{
           const resp = await axiosClient.get(`/pokemon/?offset=${page}&limit=5`);
           const data = resp.data.results;
           setResults(data)
        }
        apiCall();
    }, [])

    return ( 
        <Fragment>
            {results.map(pokemon=>(
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
            
        </Fragment>
     );
}
 
export default PokemonList;