import {
    BUY_TICKET,
    TICKET_FAIL
} from '../actions/types'

const initialState = {
    ticket: null,
    tickets: [],
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case BUY_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false
            }
        case TICKET_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}