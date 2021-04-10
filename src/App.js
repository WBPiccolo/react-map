import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Home from './component/Home'
import Mapp from './component/Mapp'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/map/:name">
            <Mapp />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

/**
 * Assignment
  Sviluppo di un’app responsive con framework React per la visualizzazione su mappa di posizione
  corrente e coordinate geografiche.
  Il candidato deve sviluppare due pagine in modo che:
     Nella prima pagina ci sia un form di immissione dei dati dell’utente (nome, cognome ed e-
    mail) con tasto di submit.
     Alla submit della prima pagina l’utente venga indirizzato nella seconda pagina.
    Nella seconda pagina devono essere presenti: un titolo che riporti il nome dell’utente che
    sta usando l’app e la mappa al di sotto.
  All’apertura della seconda pagina viene richiesto se utilizzare la posizione corrente, in
  alternativa l’utente deve poter navigare sulla mappa anche tramite l’indirizzo.
  Tutti gli utenti che hanno compilato il form e tutte le ricerche fatte su mappa (le coordinate
  geografiche ricercate, composte da latitudine e longitudine) devono essere salvati su json che
  verrà salvato direttamente sul file system del computer (non ha importanza su come vengono
  salvati i dati, l’importante è che sia leggibile).
  La resposiveness dell’interfaccia può essere sviluppata anche con l’aiuto di framework esistenti.
  Infine, il progetto deve essere caricato su qualsiasi versioning cloud provider (Github, Bitbucket,
  GitLab, etc) per poter essere visionato e testato.
  Consigli:
  Creazione dell’app tramite create-react-app
  Utilizzo di servizi per la mappa quali Google, Open Street Map, Leaflet etc.
 */