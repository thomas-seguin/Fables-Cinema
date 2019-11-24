import axios from 'axios';
import {
    BUY_TICKET,
    TICKET_FAIL,
    REMOVE_BOUGHT
} from './types'
import { setAlert } from './alert';

// Buy Ticket
export const buyTickets = ({ name, email, ticketNum }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, ticketNum });

    try {
        const res = await axios.post('/api/ticket', body, config);

        dispatch({
            type: BUY_TICKET,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: TICKET_FAIL
        });
    }
}

export const rBought = () => async dispatch => {
    dispatch({
        type: REMOVE_BOUGHT
    });
}
