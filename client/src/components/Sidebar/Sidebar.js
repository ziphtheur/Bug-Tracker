import React from 'react';
import { useHistory } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const history = useHistory();

    return (
        <div className="sidebar">
            <h1>BugTracker</h1>
            <ul className="sidebar-links">
                <li onClick={() => history.push('/dashboard')}>Dasboard Home</li>
                <li onClick={() => history.push('/create-ticket')}>Create Ticket</li>
                <li onClick={() => history.push('/manage-user-role')}>Manage User Roles</li>
                <li onClick={() => history.push('/manage-project-users')}>Manage Project Users</li>
                <li onClick={() => history.push('/my-projects')}>My Projects</li>
                <li onClick={() => history.push('/my-tickets')}>My Tickets</li>
            </ul>

        </div>
        
    )
}
export default Sidebar;