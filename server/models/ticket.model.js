const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    Project_Name : { type: String, required: true},
    Project_Lead : { type: String, required: true},
    members : { type: Array },
    tickets : { type: Array }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket;