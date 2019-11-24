import axios from 'axios';
import { setAlert } from './alert';
import {
    MOVIE_SUCCESS,
    MOVIE_FAIL,
    GET_MOVIES
} from './types';

// Add Movie
export const addMovie = ({ movieName, rating, time }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ movieName, rating, time });

    try {
        const res = await axios.post('/api/movies', body, config);
        dispatch({
            type: MOVIE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            console.log('Error');
        }

        dispatch({
            type: MOVIE_FAIL
        });
    }
}

// Get all Profiles
export const getMovies = () => async dispatch => {

    try {
        const res = await axios.get('/api/movies');

        dispatch({
            type: GET_MOVIES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: MOVIE_FAIL
        });
    }
};