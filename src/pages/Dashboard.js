import React,{Fragment,useState,useContext,useEffect} from 'react';
import {useParams,Redirect} from 'react-router-dom';
import { translate } from 'react-translate';

//Context
import PokemonContext from '../context/PokemonContext';

//Components
import LanguageSelect from '../components/LanguageSelect';
import PokemonList from '../components/PokemonList/PokemonList';
import Paginator from '../components/Paginator/Paginator';

const Dashboard = ({t}) => {

    const {page}=useParams();
    const [actualpage,setActualPage] = useState(Number(page));
    const {footerValues} = useContext(PokemonContext)
    const { questions }=footerValues

    useEffect(() => {
        setActualPage(Number(page))
    }, [page]);

    if(!page) {
        return <Redirect to="/main/1"/>
    } 


    return ( 
        <Fragment>
            <h1> {t(questions)} </h1>
            <LanguageSelect/>
            <PokemonList page={actualpage} />
            <Paginator page={actualpage} setPage={setActualPage} />
        </Fragment>
     );
}
 
export default translate ('footer')(Dashboard);