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
        <h1 style={{textAlign: "center"}}>Welcome to Nahuel's Page</h1>
        <Navbar />
      </header>

      <div style={{maxWidth: "1280px", backgroundColor: "lightblue", margin: "0 auto"}}>
        <Switch >
          <Route path="/section-2/:id" component= { Section2 }></Route>
          <Route path="/section-2" component= { Section2 }></Route>
          <Route path="/section-3" component= { Section3 }></Route>
          <Route path="/" component= { Section1 }></Route>
        </Switch >
      </div>


    </div>
  );
}

export default App;
