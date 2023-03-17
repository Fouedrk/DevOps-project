import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProduitsComponent from './components/ListProduitsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreerProduitComponent from './components/CreerProduitComponent';
import UpdateProduitComponent from './components/UpdateProduitComponent';
import ConsulterProduitComponent from './components/ConsulterProduitComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProduitsComponent}></Route>
                          <Route path = "/produits" component = {ListProduitsComponent}></Route>
                          <Route path = "/add-produit/:id" component = {CreerProduitComponent}></Route>
                          <Route path = "/view-produit/:id" component = {ConsulterProduitComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
