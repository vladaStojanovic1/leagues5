import React from 'react';
import './styles/style.css';
import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Route, Switch } from 'react-router-dom';
import { CompetitionProvider } from './context';
import { ItalyLeague } from './pages/ItalyLeague';
import { ChampionsLeague } from './pages/ChampionsLeague';
import { EnglandLeague } from './pages/EnglandLeague';
import { FranceLeague } from './pages/FranceLeague';
import { GermanyLeague } from './pages/GermanyLeague';
import { SpanishLeague } from './pages/SpanishLeague';


function App() {
  return (
    // <CompetitionProvider>
    <div className="App">
      <Logo />

      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/italy/:id' component={ItalyLeague} />
        <Route path='/champions-league/:id' component={ChampionsLeague} />
        <Route path='/england/:id' component={EnglandLeague} />
        <Route path='/france/:id' component={FranceLeague} />
        <Route path='/germany/:id' component={GermanyLeague} />
        <Route path='/spanish/:id' component={SpanishLeague} />
      </Switch>

    </div>
    // </CompetitionProvider>
  );
}

export default App;
