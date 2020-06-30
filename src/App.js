import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>Error</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
