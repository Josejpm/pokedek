import React,{useEffect,useState} from 'react';
import axiosClient from '../../config/axios';

const Ability = ({ability}) => {
    
    const {ability:{name}}=ability;
    const lang = 'en';
    const [langAbility,setLangAbility]=useState('');

    useEffect(() => {

        const apiCall= async ()=>{
            const resp = await axiosClient.get(`/ability/${name}`);

            const langName = resp.data.names.filter(name=>(
                name.language.name === lang
            ))

            setLangAbility(langName[0].name)
        }

        apiCall()

    }, [])

    return ( 
        <h3>{langAbility}</h3>
     );
}
 
export default Ability;