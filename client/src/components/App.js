import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTicket from './Tickets/CreateTicket';
import EditTicket from './Tickets/EditTicket';
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard';

const App = () => {

    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/create-ticket' exact component={CreateTicket} />
            <Route path='/edit-ticket' exact component={EditTicket} />
        </Router>
    )
}

export default App;