import React,{Fragment, useEffect,useState} from 'react';
import axiosClient from '../../config/axios';

import PokemonCard from '../PokeCard/PokemonCard';

import './PokemonList.scss';

const PokemonList = ({page}) => {

    const [results,setResults] = useState([]);

    useEffect(() => {
        const apiCall = async ()=>{
           const resp = await axiosClient.get(`/pokemon/?offset=${(page-1)*5}&limit=5`);
           const data = resp.data.results;
           setResults(data)
        }
        apiCall();
    }, [page])


    return ( 
        <Fragment>
            <div className="poke-list">
                {results.map(pokemon=>(
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </Fragment>
     );
}
 
export default PokemonList;