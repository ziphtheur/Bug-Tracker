import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './EditTicket.css'

const EditTicket = () => {

    return (
        <>
            <Sidebar />
            <Header />
            <div className="edit-ticket-container">
                <form className="edit-ticket">
    
                </form>
            </div>
        </>
    )
}

export default EditTicket;