
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; // Import your custom styles
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;