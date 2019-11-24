const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ticketNum: {
        type: String,
        required: true,
    }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);