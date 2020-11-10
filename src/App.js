import React from 'react';
import Navbar from './components/Navbar/NavBar'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{textAlign: "center"}}>Final Fantasy Heroes</h1>
        <Navbar />
      </header>

      <main className="container-zone">
        <Switch >
          <Route path="/nahuel-react-ff-api/section-2/:id" component= { Section2 }></Route>
          <Route path="/nahuel-react-ff-api/section-2" component= { Section2 }></Route>
          <Route path="/nahuel-react-ff-api/section-3" component= { Section3 }></Route>
          <Route path="/nahuel-react-ff-api" component= { Section1 }></Route>
        </Switch >
      </main>


    </div>
  );
}

export default App;
