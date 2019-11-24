import {
    BUY_TICKET,
    TICKET_FAIL,
    REMOVE_BOUGHT
} from '../actions/types'

const initialState = {
    ticket: null,
    tickets: [],
    bought: null,
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case BUY_TICKET:
            return {
                ...state,
                ticket: payload,
                bought: true,
                loading: false
            }
        case REMOVE_BOUGHT: {
            return {
                ...state,
                bought: false,
                loading: false
            }
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