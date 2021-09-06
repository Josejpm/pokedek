import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import { translate } from 'react-translate';
import PokemonContext from '../../context/PokemonContext';
import TranslateContext from '../../context/TranslateContext';
import './Paginator.scss'

const Paginator = ({page,t}) => {
    const {paginatorValues} = useContext(TranslateContext);
    const { next,prev }=paginatorValues;
    const {totalPages}=useContext(PokemonContext)
    return ( 

        <div className="paginator" >
            <div className="buttons-container">

            <Link 
                className={page===1 ? "disabled-button" : "enabled-button prev " } 
                to={`/main/${page-10}`}
            > -10 </Link>

            <Link 
                className={page===1 ? "disabled-button" : "enabled-button prev " } 
                to={`/main/${page-1}`}
            > {t(prev)}</Link>

            <p className="paginator-number actual" >{page}</p>
<Link 
                className={page===totalPages ? "disabled-button" : "enabled-button next " } 
                to={`/main/${page+1}`}
            > {t(next)}</Link>
              

            <Link  
                className={page===totalPages ? "disabled-button" : "enabled-button next " }  
                to={`/main/${page+10}`}
            > +10 </Link>
            </div>
        </div>

     );
}
 
export default translate ('paginator')(Paginator)