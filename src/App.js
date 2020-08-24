import React from 'react';
import Clock from './Clock';
import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <main className="">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer/>
        <Clock/>
      </HashRouter>
    </div>
  );
}

export default App;
