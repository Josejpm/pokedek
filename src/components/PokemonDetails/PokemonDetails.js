import React,{Fragment,useContext} from 'react'
import PokemonContext from '../../context/PokemonContext';
import AbilitiesList from '../AbilitiesList/AbilitiesList';
import { translate } from 'react-translate';
import TranslateContext from '../../context/TranslateContext';
import DescriptionsList from '../DescriptionsList/DescriptionsList';
import usePokeInfo from '../../hooks/usePokeInfo';
import './PokemonDetails.scss';
const PokemonDetails = ({t}) => {
    
    const {selectedPokemon:{name,sprites},language} = useContext(PokemonContext);
    const {description,specie} = usePokeInfo(name,language);
    const {pokeDetails:{specieLoading,descLoading}} = useContext (TranslateContext);
    
    const imageURL = (sprites.other.dream_world.front_default === null) ? sprites.other['official-artwork'].front_default : sprites.other.dream_world.front_default

    return ( 
        <Fragment>
            <div className="details-container">
                <div className="details-background">
                    <img className="poke-image" src={imageURL} />
                </div>
            
                <div className="details-body">

                    <h2 className="poke-name" >{name} <span>  </span> </h2>

                    {specie 
                        ? <h3 className="poke-specie"> {specie} </h3>
                        : <p>{t(specieLoading)}</p>
                    }
                    
                    {description 
                        ? <DescriptionsList description={description} />
                        : <p>{t(descLoading)}</p>
                    }
                    
                    <div className="stats-container">
                        <AbilitiesList/>
                    </div>
                </div>
            </div>
        </Fragment>

     );
}

export default translate ('pokemon-details') (PokemonDetails) ;