import {
    MOVIE_SUCCESS,
    MOVIE_FAIL,
    GET_MOVIES
} from '../actions/types';

const initialState = {
    movie: null,
    movies: [],
    loading: true,
    error: {}

}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case MOVIE_SUCCESS:
            return {
                ...state,
                movie: payload,
                loading: false
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: payload,
                loading: false
            }
        case MOVIE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
}