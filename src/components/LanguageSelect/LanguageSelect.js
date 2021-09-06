import React, { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';
import './languageSelect.scss'

const LanguageSelect = () => {

    const {language,setLanguage} = useContext(PokemonContext);

    return ( 
        <header className="poke-header">
            <select onChange={e=>setLanguage(e.target.value)} name="lang" className="lang-select" value={language} >
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </header>
     );
}
 
export default LanguageSelect;