import React from 'react';
import Navbar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import Search from './components/Search/Search'
import NotFound from './components/NotFound/NotFound'
import { Route, Switch, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <header>
          <h1 style={{textAlign: "center"}}>Final Fantasy Heroes</h1>
          <div className="myGit">
            <div><a href="https://github.com/matiasibarra7" target="_black"><i className="fab fa-github" style={{color: "black"}}></i></a></div>
            <div><a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_black"><i className="fab fa-linkedin" style={{color: "#0e76a8"}}></i></a></div>
          </div>
          <Navbar />
        </header>

        <main className="container-zone">
          <Switch >
            <Route path="/details/:id?" component= { Details }></Route>
            <Route path="/search" component= { Search }></Route>
            <Route exact path="/" component= { Home }></Route>
            <Route component= { NotFound }></Route>
          </Switch >
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
