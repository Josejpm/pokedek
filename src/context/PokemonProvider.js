import React,{useState} from 'react';
import PokemonContext from './PokemonContext';

const PokemonProvider = ({children}) => {
    
    const [selectedAbilities,setSelectedAbilities] = useState([]);
    const [language,setLanguage] = useState('es');
    const [selectedSpecies,setSelectedSpecies] = useState('');

    const loginValues = {
        title:"login",
        input1:"placeholder",
        input2:"placeholder2",
        facebook:"facebook",
        captcha:"captcha",
        firstTime:"firstTime",
        subscribe:"subscribe",
        needHelp:"needHelp",
        remember:"remember",
        moreInfo:"moreInfo",
        error1:"error1",
        error2:"error2",
        showP:"showP",
        hideP:"hideP"
      }
    
    const footerValues = {
        questions:"questions",
        giftCard:"giftCard",
        terms:"terms",
        privacy:"privacy"
      }
    
    
    return ( 
        <PokemonContext.Provider
            value={{
                selectedAbilities,
                language,
                selectedSpecies,
                loginValues,
                footerValues,
                setSelectedAbilities,
                setLanguage,
                setSelectedSpecies,
            }}
        >

            {children}
        </PokemonContext.Provider>
     );
}
 
export default PokemonProvider;

