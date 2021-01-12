import {React, useState} from 'react';
import './CreateTicket.css'

const CreateTicket = () => {
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketDescription, setTicketDescription] = useState("");

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(ticketDescription, ticketTitle)
    }


    return (
        <div className="create-ticket-container">
            <form onSubmit={formSubmit}>
                <label >Ticket Title</label>
                <input id="ticket-Title" type="text" value={ticketTitle} onChange={event => setTicketTitle(event.target.value)}/>
                <label>Project Name</label>
                <select>
                    <option>Brooklyn</option>
                    <option>Science Fair</option>
                    <option>Gotham</option>
                </select>
                <label>ticket priority</label>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <label>Description</label>
                <input value={ticketDescription} onChange={event => setTicketDescription(event.target.value)} />
                <input type="submit" value="Submit Ticket" />
            </form>
        </div>
    )
}

export default CreateTicket;