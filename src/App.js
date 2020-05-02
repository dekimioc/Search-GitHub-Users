import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import SearchPage from './pages/SearchPage/SearchPage'
import RepoPage from './pages/RepoPage/RepoPage';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">

        <Header />
        <Router>
          <Switch>
            <Route path="/search-github-users" exact component={SearchPage} />
            <Route path="/search-github-users/repositories" component={RepoPage} />
          </Switch>
        </Router>
      </HashRouter>

    </div>
  );
}


export default App;
