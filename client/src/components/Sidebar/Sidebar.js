import React from 'react';
import './sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <h1>BugTracker</h1>
            <ul className="sidebar-links">
                <li>Dasboard Home</li>
                <li>Manage User Roles</li>
                <li>Manage Project Users</li>
                <li>My Projects</li>
                <li>My Tickets</li>
            </ul>

        </div>
        
    )
}
export default Sidebar;