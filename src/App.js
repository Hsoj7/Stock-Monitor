import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Search_Company from './components/pages/Search_Company';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact /> */}
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/search_company' component={Search_Company} />
        </Switch>
      </Router>
    </>
  );
}

export default App;