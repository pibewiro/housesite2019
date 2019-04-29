import React from 'react';
import './App.css';
import Header from "./components/Header";
import Houses from "./components/Houses";
import {Provider} from "react-redux";
import store from "./store";
import Apartments from "./components/Apartments";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import RentHouses from "./components/RentHouses";
import Contact from "./components/Contact";





import {HashRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/houses" component={Houses} />
          <Route exact path="/apartments" component={Apartments} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rent/houses" component={RentHouses} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
