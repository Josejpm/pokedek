import React,{useEffect,useState,useContext} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {getPokemonDetail} from '../../services/getApiInfo';
import './PokemonCard.scss';

//Context
import PokemonContext from '../../context/PokemonContext';
import Spinner from '../Spinner/Spinner';


const PokemonCard = ({pokemon}) => {
    const history = useHistory();
    const {page}=useParams();
    const {setSelectedPokemon} = useContext(PokemonContext);
    const [pokemonDetail,setPokemonDetail] = useState({})
    const {url} = pokemon;
    
    useEffect(() => {
        getPokemonDetail(url).then( detail =>setPokemonDetail(detail) )
    }, []);

    const {sprites,abilities,id,species,name,stats}=pokemonDetail;

    const handleClick = ()=>{
        setSelectedPokemon({name,abilities,sprites,species,stats});
        history.push(`/details/${page}/${id}`);
    }

    return (
            <div onClick={()=>handleClick()} className="poke-card">
                    {sprites 
                        ? <img className="poke-img" src={sprites.other['official-artwork'].front_default}/> 
                        : <Spinner/>
                    }
                <h1 className="poke-name" >{(name)}</h1>
        </div>
    );
}
 
export default PokemonCard;