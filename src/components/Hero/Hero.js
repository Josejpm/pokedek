import React,{useContext} from 'react';
import Header from '../Header/Header';
import { translate } from 'react-translate';
import TranslateContext from '../../context/TranslateContext';

import './hero.scss'

const Hero = ({t}) => {

    const {hero} = useContext(TranslateContext);
    const {title} = hero
    return ( 

        <div className="hero-container">
            <Header/>
            <div className="hero-text-container">
                <h2 className="hero-text" > {t(title)} </h2>
            </div>
        </div>

     );
}
 
export default translate('hero')(Hero);