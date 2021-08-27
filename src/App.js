import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, List, Search } from './pages';
import { HelmetProvider  } from 'react-helmet-async'
import { Header } from './components';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header title="Home Giphy - Andrio Pratama" />
            <Home />
          </Route>
          <Route exact path="/list">
            <Header title="List Giphy - Andrio Pratama" />
            <List />
          </Route>
          <Route exact path="/search">
            <Header title="Search Giphy - Andrio Pratama" />
            <Search />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  )
}

export default App;
