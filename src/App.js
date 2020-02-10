import React from 'react';
import './styles/style.css';
import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Route, Switch } from 'react-router-dom';
import { LeagueInfo } from './pages/LeagueInfo';
import { Footer } from './components/footer/Footer';
import { Head2Head } from './pages/head2head/Head2Head';


function App() {

  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/head2head/:id' component={Head2Head} />
        <Route path='/:league/:id' component={LeagueInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
