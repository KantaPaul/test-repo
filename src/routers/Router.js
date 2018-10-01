import React from 'react';
import Header from '../Components/Header';
import ExpenseDashboradpage from '../Components/ExpenseDashboradpage';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Help from '../Components/Help';
import NotFound from '../Components/NotFound';
import AddExpensePage from '../Components/AddExpense';
import EditExpensePage from '../Components/EditExpensePage';
import {BrowserRouter , Route, Switch, Link, NavLink  } from 'react-router-dom';

let HeaderTitle = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addexpense">Add Expense </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/help">Help</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

let Routes = () => (
    <BrowserRouter>
      <div>
        <HeaderTitle />
        <Switch>
          <Route path="/" component={ExpenseDashboradpage} exact={true}/>
          <Route path="/addexpense" component={AddExpensePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default Routes;