import React,{useContext} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';

//Context
import PokemonContext from './context/PokemonContext';
import TranslateProvider from './context/TranslateProvider';

//Components
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {

  const {language} = useContext(PokemonContext);

  const getLayout=(lang)=>{
    
    return (
      <TranslatorProvider translations={require(`./assets/i18n/${lang}.json`)} >
           <Route path="/" component={Dashboard}/> 
           <Route exact path='/main/:page' component={Dashboard} />
           <Route exact path='/details/:page/:id' component={Details} />
      </TranslatorProvider>
    )
  }

  return (
      <Router>
        <Switch>
          <TranslateProvider>
            {language==='es' ? getLayout('es') : getLayout('en') }
          </TranslateProvider>
        </Switch>
     </Router>
  )
}

export default App;
