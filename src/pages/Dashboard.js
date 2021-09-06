import React,{useState,useEffect} from 'react';
import {useParams,Redirect} from 'react-router-dom';
import './scss/dashboard.scss'

//Components
import PokemonList from '../components/PokemonList/PokemonList';
import Hero from '../components/Hero/Hero';

const Dashboard = () => {

    const {page}=useParams();
    const [actualPage,setActualPage] = useState(Number(page));
    
    
    useEffect(() => {
        setActualPage(Number(page));
    }, [page]);

    if(!page) {
        return <Redirect to="/main/1"/>
    } 


    return ( 
        <div className="main-container">
            <Hero/>
            <PokemonList page={actualPage} setActualPage={setActualPage} />
        </div>

     );
}
 
export default Dashboard;