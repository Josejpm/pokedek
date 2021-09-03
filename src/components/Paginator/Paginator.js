import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom';
import { translate } from 'react-translate';
import PokemonContext from '../../context/PokemonContext';
import './Paginator.scss'

const Paginator = ({page,t}) => {
    const history = useHistory();
    const {footerValues} = useContext(PokemonContext)
    const { questions }=footerValues
    return ( 

        <div className="paginator" >
            <button 
                className={page===1 ? "disabled-button" : "enabled-button prev " } 
                onClick={()=>history.push(`/main/${page-1}`)} 
            > {t(questions)}</button>
                <p>{page}</p>
            <button  
                className="enabled-button next " 
                onClick={()=>history.push(`/main/${page+1}`)}
            >Next</button>
        </div>

     );
}
 
export default translate ('footer')(Paginator)