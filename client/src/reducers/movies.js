import {
    MOVIE_SUCCESS,
    MOVIE_FAIL,
    GET_MOVIES,
    GET_MOVIE,
    REMOVE_MOVIE
} from '../actions/types';

const initialState = {
    movie: null,
    movies: [],
    loading: true,
    selected: false,
    error: {}

}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie._id !== payload),
                loading: false
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: payload,
                selected: true,
                loading: false
            }
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