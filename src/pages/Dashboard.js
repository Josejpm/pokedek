import React,{Fragment,useState} from 'react';

//Components
import PokemonList from '../components/PokemonList/PokemonList';

const Dashboard = () => {
    const [page,setPage] = useState(15);
    
    return ( 
        <Fragment>

            <PokemonList page={page} />
        
        </Fragment>
     );
}
 
export default Dashboard;