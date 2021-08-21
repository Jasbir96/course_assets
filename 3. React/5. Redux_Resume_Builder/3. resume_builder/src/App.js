import React from 'react';
import './App.css';
import CartPage from "./components/CartPage";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import NaVBar from "./components/NaVBar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
    <NaVBar/>
      <Switch>
        <Route path="/product/:id" component={ProductPage}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route path="/" component={HomePage} ></Route>
        <Redirect to="/" ></Redirect>
      </Switch>
    </Router>
  );
}
export default App;