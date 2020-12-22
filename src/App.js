import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { HomePage, ErrorPage, CommingSoonPage } from './pages';
import { NavbarComponent, Footer, ScrollToTop } from './components';


function App() {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove(); setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (

    <Router>
      <ScrollToTop />
      <NavbarComponent />
      <Switch>
        <Route path='/opensource-portfolio' exact component={HomePage} />
        <Route path='/comingsoon' exact component={CommingSoonPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
