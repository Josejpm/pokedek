import React, { Fragment,useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';

import Ability from '../Ability/Ability';

const AbilitiesList = () => {
    const {selectedAbilities} = useContext(PokemonContext);
    return ( 
        <Fragment>
            {selectedAbilities.map(ability=>(
                <Ability ability={ability} />
            ))}
        </Fragment>
     );
}
 
export default AbilitiesList;