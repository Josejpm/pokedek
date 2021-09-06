import React,{Fragment, useEffect,useState,useContext} from 'react';
import {getPokemons} from '../../services/getApiInfo';
import PokemonContext from '../../context/PokemonContext';
import PokemonCard from '../PokeCard/PokemonCard';
import './PokemonList.scss';
import Paginator from '../Paginator/Paginator';

const PokemonList = ({page,setActualPage}) => {
    const {setTotalPages}=useContext(PokemonContext)
    const [pokemons,setPokemons] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getPokemons(page).then(info=>{
            setTotalPages(Math.ceil(info.count/5));
            setPokemons(info.results);
        })
        setLoading(false)
    }, [page])

    return ( 
        <Fragment>
            <div className="poke-list">
                <Paginator page={page} setPage={setActualPage} />
                <div className="cards-container">
                    {pokemons.map(pokemon=>(
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
            </div>
        </Fragment>
     );
}
 
export default PokemonList;