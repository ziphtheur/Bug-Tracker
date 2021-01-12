import React from 'react';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import CreateTicket from './CreateTicket/CreateTicket'

const App = () => {

    return (
        <div>
            <Header/>
            <Sidebar/>
            <CreateTicket />
        </div>
    )
}

export default App;