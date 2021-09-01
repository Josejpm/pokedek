import React, { Fragment } from 'react'
import Ability from '../Ability/Ability';

const AbilitiesList = ({abilities}) => {
    
    return ( 
        <Fragment>
            {abilities.map(ability=>(
                <Ability ability={ability} />
            ))}
        </Fragment>
     );
}
 
export default AbilitiesList;