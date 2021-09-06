import React from 'react';
import './header.scss'
import pokeball from '../../assets/img/pokeball.svg'
import LanguageSelect from '../LanguageSelect/LanguageSelect';

const Header = () => {
    return ( 
        <header className="app-header">
            <div className="content-left">
                <img className="app-logo" src={pokeball} ></img>
                <h1 className="app-title" >Pokedex</h1>
            </div>

            <div className="content-right">
                <LanguageSelect/>
            </div>
        </header>
        
     );
}
 
export default Header;