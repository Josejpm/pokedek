import React,{Fragment, useEffect,useState,useContext} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import axiosClient from '../../config/axios';
import './PokemonCard.scss';

//Context
import PokemonContext from '../../context/PokemonContext';


const PokemonCard = ({pokemon}) => {
    const history = useHistory();
    const {page}=useParams();
    const {setSelectedAbilities,setSelectedSpecies,setPokemonPage} = useContext(PokemonContext);
    const [pokemonStats,setPokemonStats] = useState({})
    const {name,url} = pokemon;
    
    useEffect(() => {
        const apiCall = async ()=>{
            const resp = await axiosClient.get(url);
            setPokemonStats(resp.data)
        }
        apiCall()
    }, []);

    const {sprites,abilities,id,species}=pokemonStats;

    const handleClick = ()=>{
        setSelectedAbilities(abilities);
        setSelectedSpecies(species.name);
        history.push(`/details/${page}/${id}`);
    }

    return (
        <Fragment>
            <div onClick={()=>handleClick()} className="poke-card">
                {sprites ? <img width="200px" height="200px" src={sprites.other.dream_world.front_default}/> : null }
                <h1 className="poke-name" >{(name)}</h1>
            </div>
        </Fragment> 
        
     );
}
 
export default PokemonCard;