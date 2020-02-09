import React from 'react';
import './styles/style.css';
import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Route, Switch } from 'react-router-dom';
import { LeagueInfo } from './pages/LeagueInfo';
import { Footer } from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/:league/:id' component={LeagueInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
