import axiosClient from '../config/axios';

export const getPokemons = async (page)=>{
    const resp = await axiosClient.get(`/pokemon/?offset=${(page-1)*5}&limit=5`);
    const data = resp.data;
    
    return data
} 

export const getPokemonInfo = async (name,language)=>{

    const resp = await axiosClient.get(`/pokemon-species/${name}`);
        
        //Obtener la descripcion por idioma
        const entries = resp.data.flavor_text_entries;
        const flavorText = entries.filter(entry => ( entry.language.name === language ));
        const randomDesc= (Math.floor(flavorText.length*Math.random()));
        const description = flavorText[randomDesc].flavor_text;

        //Obtener la especie por idioma
        const genera = resp.data.genera;
        const genus = genera.filter(pokemon=>pokemon.language.name===language);
        const specie = genus[0].genus

        return description
}

export const getAbility = async (abilityName,language)=>{

    const resp = await axiosClient.get(`/ability/${abilityName}`);
    const ability = resp.data.names.filter(name=>(name.language.name === language));
    
    return (ability[0].name)
}

export const getPokemonDetail = async (url)=>{
 
     const resp = await axiosClient.get(url);
     return resp.data;
    
  
}
