import { useEffect,useState } from 'react';
import axiosClient from '../config/axios';


const usePokeInfo = (name,language) => {

        const [resp,setResp]=useState();
        
        let description,specie;

        useEffect(() => {
            const apiCall = async ()=>{
                const response = await axiosClient.get(`/pokemon-species/${name}`)
                setResp(response)
            }
            apiCall()
        }, []);

        if(resp){
            //Obtener la descripcion por idioma
            const entries = resp.data.flavor_text_entries;
            const flavorText = entries.filter(entry => ( entry.language.name === language ));
            const randomDesc= (Math.floor(flavorText.length*Math.random()));
            description = flavorText[randomDesc].flavor_text;

            //Obtener la especie por idioma
            const genera = resp.data.genera;
            const genus = genera.filter(pokemon=>pokemon.language.name===language);
            specie = genus[0].genus;

        }
        
        return {description,specie}
}
 
export default usePokeInfo;