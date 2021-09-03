import React,{useEffect,useState,useContext} from 'react';
import axiosClient from '../../config/axios';
import PokemonContext from '../../context/PokemonContext'
const Ability = ({ability}) => {
    const {language}=useContext(PokemonContext);
    const {ability:{name}}=ability;
    const [langAbility,setLangAbility]=useState('');

    useEffect(() => {
        const apiCall= async ()=>{
            const resp = await axiosClient.get(`/ability/${name}`);
            const langName = resp.data.names.filter(name=>(
                name.language.name === language
            ))
            setLangAbility(langName[0].name)
        }
        apiCall()
    }, [])

    return ( 
        <h3>{langAbility}</h3>
     );
}
 
export default Ability;