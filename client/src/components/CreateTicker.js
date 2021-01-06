import React from 'react';

const CreateTicket = () => {

    return (
        <div>
            <form>
                <label >Ticket Title</label>
                <input id="ticket-Title" type="text"/>
                <label>ticket priority</label>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <input />
                <label>Description</label>
            </form>
        </div>
    )
}

export default CreateTicket;