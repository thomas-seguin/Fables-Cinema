import axios from 'axios';
import { setAlert } from './alert';
import {
    MOVIE_SUCCESS,
    MOVIE_FAIL,
    GET_MOVIES,
    GET_MOVIE,
    REMOVE_MOVIE
} from './types';

// Add movie
export const addMovie = (name, rating, time) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, rating, time });
    console.log(body);

    try {
        const res = await axios.post(
            `/api/movies`,
            body,
            config
        );

        dispatch({
            type: MOVIE_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('Movie Added', 'success'));
    } catch (err) {
        dispatch({
            type: MOVIE_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

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

// Get movie by ID
export const getMovieById = movieId => async dispatch => {
    try {
        const res = await axios.get(`/api/movies/${movieId}`);

        dispatch({
            type: GET_MOVIE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: MOVIE_FAIL,

        });
    }
};

// Delete Movie
export const deleteMovie = (movieId) => async dispatch => {

    try {
        await axios.delete(`/api/movies/${movieId}`);

        dispatch({
            type: REMOVE_MOVIE,
            payload: movieId
        });

        dispatch(setAlert('Movie Removed', 'success'));
    } catch (err) {
        dispatch({
            type: MOVIE_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};