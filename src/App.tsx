import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Consulting from "./components/pages/Consulting";
import Marketing from "./components/pages/Marketing";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact-us" exact component={Products} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
        <Route path="/services" exact component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
