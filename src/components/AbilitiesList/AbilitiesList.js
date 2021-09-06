import React, { Fragment,useContext } from 'react';
import { translate } from 'react-translate';
import PokemonContext from '../../context/PokemonContext';
import TranslateContext from '../../context/TranslateContext';
import Ability from '../Ability/Ability';

const AbilitiesList = ({t}) => {
    
    const {selectedPokemon:{abilities}} = useContext(PokemonContext);
    const {pokeDetails:{pokeAbilities}} = useContext (TranslateContext);
 
    return ( 
        <Fragment>
            <h3>{t(pokeAbilities)}</h3>
            {abilities.map(ability=>(
                <ul>
                    <Ability key={ability.name} ability={ability} />
                </ul>
            ))}
        </Fragment>
     );
}
 
export default translate ('pokemon-details')(AbilitiesList);