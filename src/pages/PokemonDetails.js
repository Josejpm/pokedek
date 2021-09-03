import React,{Fragment,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import PokemonContext from '../context/PokemonContext';
import AbilitiesList from '../components/AbilitiesList/AbilitiesList'
import DescriptionsList from '../components/DescriptionsList/DescriptionsList'

const PokemonDetails = () => {
    const history = useHistory();
    const {selectedAbilities} = useContext(PokemonContext);
    const {id,page} = useParams()

    if(selectedAbilities.length === 0){
        history.push(`/main/${page}`);
    }

    return ( 
        <Fragment>
            <h1>PokemonDetails : {id} </h1>
            <AbilitiesList/>
            <br/>
            <DescriptionsList/>
        </Fragment>

     );
}

export default PokemonDetails ;