import React,{Fragment,useContext} from 'react'
import {useHistory,useParams} from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import './scss/details.scss'

const Details = () => {
    const history = useHistory();
    const {selectedPokemon} = useContext(PokemonContext);
    const {page} = useParams();

    

    return ( 
        <div className="details-main-container">
            <PokemonDetails/> 
        </div>
        

     );
}

export default Details ;