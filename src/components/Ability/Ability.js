import React,{useEffect,useState,useContext} from 'react';
import PokemonContext from '../../context/PokemonContext';
import {getAbility} from '../../services/getApiInfo';

const Ability = ({ability}) => {
    const {language}=useContext(PokemonContext);
    const [langAbility,setLangAbility]=useState('');
    const {ability:{name}}=ability;

    useEffect(() => {
        getAbility(name,language).then( info=> setLangAbility(info) )
    }, [])

    return ( 
        <li>{langAbility}</li>
     );
}
 
export default Ability;