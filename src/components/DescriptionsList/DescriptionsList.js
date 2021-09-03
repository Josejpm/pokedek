import React, { useEffect,useContext } from 'react';
import axiosClient from '../../config/axios';
import PokemonContext from '../../context/PokemonContext';

const DescriptionsList = () => {

    const {selectedSpecies} = useContext(PokemonContext)

    useEffect(() => {
        const apiCall = async()=>{
            const resp = await axiosClient.get(`/pokemon-species/${selectedSpecies}`);
        }
        apiCall()

    }, [])



    return ( 
        <h1>Description List</h1>
    );
}
 
export default DescriptionsList;