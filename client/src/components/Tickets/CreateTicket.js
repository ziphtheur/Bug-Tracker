import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './CreateTicket.css';

const CreateTicket = () => {
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketDescription, setTicketDescription] = useState("");
    const [projectName, setProjectName] = useState("")
    const [assignedDeveloper, setAssignedDeveloper] = useState("Any");
    const [ticketPriority, setTicketPriority] = useState("High");
    const [ticketStatus, setTicketStatus] = useState("On Hold")
    const [currrentTime, setCurrentTime] = useState("")

    

    useEffect( () => {
        const dateTime = new Date();
        const tempDateTime = setInterval(() => {
            if(dateTime.getSeconds() < 10){
                setCurrentTime(`${dateTime.getMonth()+1}/${dateTime.getDate()}/${dateTime.getFullYear()}  ${dateTime.getHours()}:${dateTime.getMinutes()}:0${dateTime.getSeconds()}`)
                console.log(currrentTime)
            }else{
                setCurrentTime(`${dateTime.getMonth()+1}/${dateTime.getDate()}/${dateTime.getFullYear()}  ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`)
                console.log(currrentTime)
            }

            
        }, 1000)

        return () => { clearInterval(tempDateTime)}
    }, [currrentTime])

    const formSubmit = (event) => {
        event.preventDefault();

        axios.post('/create-ticket', (ticketTitle, projectName, assignedDeveloper, ticketDescription, ticketPriority, ticketStatus, currrentTime))

        console.log(ticketDescription, ticketTitle, projectName, assignedDeveloper, ticketPriority, ticketStatus)
    }    

// Assigned developer needs to be admin accesss only
    return (
        <>
            <Sidebar />
            <Header />
            <div className="create-ticket-container">
                <form className="create-ticket" onSubmit={formSubmit}>
                    <div className="create-ticket-form-div">
                        <label >Ticket Title</label>
                        <input id="ticket-Title" type="text" value={ticketTitle} onChange={event => setTicketTitle(event.target.value)}/>
                    </div>
                   <div className="create-ticket-form-div">
                        <label>Project Name</label>
                        <select value={projectName} onChange={e => setProjectName(e.target.value)}>
                            <option value="" disabled>Select a Project</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Science Fair">Science Fair</option>
                            <option value="Gotham">Gotham</option>
                        </select>
                   </div>
                    <div className="create-ticket-form-div">
                        <label>Assigned Developer</label>
                        <select value={assignedDeveloper} onChange={e => setAssignedDeveloper(e.target.value)}>
                            <option value="Any">Any</option>
                            <option value="?"> employees assigned </option>
                        </select>
                    </div>
                    <div className="create-ticket-form-div">
                        <label>Ticket Priority</label>
                        <select value={ticketPriority} onChange={e => setTicketPriority(e.target.value)}>
                            <option className="priority-high" value="High">High</option>
                            <option className="priority-medium" value="Medium">Medium</option>
                            <option className="priority-low" value="Low">Low</option>
                        </select>
                    </div>
                    <div className="create-ticket-form-div">
                        <label>Ticket Status</label>
                        <select value={ticketStatus} onChange={e => setTicketStatus(e.target.value)}>
                            <option value="On Hold">On Hold</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Approved">Approved</option>
                            <option value="Deployed">Deployed</option>
                            <option value="Closed">Closed</option>        
                        </select>
                    </div>
                        <label>Description</label>
                        <textarea wrap="true" required rows="8" value={ticketDescription} onChange={event => setTicketDescription(event.target.value)} />
                    <input type="submit" value="Submit Ticket" />
                </form>
            </div>
        </>
    )
}

export default CreateTicket;