import React,{useContext} from 'react'
import {useHistory,useParams,Redirect} from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import './scss/details.scss'

const Details = () => {
    const history = useHistory();
    const {selectedPokemon} = useContext(PokemonContext);
    const {page} = useParams();

    if(selectedPokemon === null){
        return <Redirect to={`/main/${page}`}/>
    }

    return ( 
        <div className="details-main-container">
            <PokemonDetails/> 
        </div>
        

     );
}

export default Details ;