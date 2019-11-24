const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');

const Ticket = require('../../modles/Ticket');

// @route POST /api/tickets
// @desc add ticket purchase to Database
// @access PUBLIC
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Valid Email Is Required').isEmail(),
    check('ticketNum', 'Number of tickets is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        name,
        email,
        ticketNum

    } = req.body;

    try {

        // Create
        let ticket = new Ticket({
            name,
            email,
            ticketNum

        });

        await ticket.save();
        res.json(ticket)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

