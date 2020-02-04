import React from 'react';
import './styles/style.css';
import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Route, Switch, Router } from 'react-router-dom';
import { LeagueInfo } from './pages/LeagueInfo';
import { MyCarousel } from './components/myCarousel/MyCarousel';
import { BestPlayers } from './components/bestPlayers/BestPlayers';
import { Footer } from './components/footer/Footer';


const myToken = '70369ad901764f939fa1d166e7871eb3';
localStorage.setItem('myToken', myToken);

function App() {

  return (
    <div className="App">
      <Logo />

      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/:league/:id' component={LeagueInfo} />
      </Switch>
    </div>
  );
}

export default App;
