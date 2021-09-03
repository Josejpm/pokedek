import React,{useContext} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';
//Context
import PokemonContext from './context/PokemonContext';
//Components
import Dashboard from './pages/Dashboard';
import PokemonDetails from './pages/PokemonDetails';

function App() {

  const {language} = useContext(PokemonContext);

  const getLayout=(lang)=>{
    
    return (
      <TranslatorProvider translations={require(`./assets/i18n/${lang}.json`)} >  
           <Route exact path="/" component={Dashboard}/> 
           <Route exact path='/main/:page' component={Dashboard} />
           <Route exact path='/details/:page/:id' component={PokemonDetails} />
      </TranslatorProvider>
    )
  }

  return (
      <Router>
        <Switch>
          {language==='es' ? getLayout('es') : getLayout('en') }     
        </Switch>
     </Router>
  )
}

export default App;
