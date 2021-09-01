import React,{Fragment, useEffect,useState} from 'react'
import axiosClient from '../../config/axios';
import AbilitiesList from '../AbilitiesList/AbilitiesList';

const PokemonCard = ({pokemon}) => {
    const {name,url} = pokemon;
    const lang = 'es'
    const [pokemonStats,setPokemonStats] = useState({})
    //const [abilities,setAbilities]=useState([]);
    
    useEffect(() => {
        const apiCall = async ()=>{
            const resp = await axiosClient.get(url);
            setPokemonStats(resp.data);
        }
        apiCall()
    }, []);

    const {sprites,abilities}=pokemonStats;

    return (
        <Fragment>
            <h1>{(name)}</h1>
            {sprites ? <img width="200px" src={sprites.other.dream_world.front_default}/> : null }
            {abilities ? <AbilitiesList abilities={abilities} /> : null }
        </Fragment> 
        
     );
}
 
export default PokemonCard;