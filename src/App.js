import React from 'react';
import Navbar from './components/Navbar/NavBar'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import NotFound from './components/NotFound/NotFound'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
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
          <Route path="/final-fantasy-heroes/section-2/:id?" component= { Section2 }></Route>
          <Route path="/final-fantasy-heroes/section-3" component= { Section3 }></Route>
          <Route exact path="/final-fantasy-heroes" component= { Section1 }></Route>
          <Route exact path="/" component= { NotFound }></Route>
          <Route component= { NotFound }></Route>
        </Switch >
      </main>
    </div>
  );
}

export default App;
