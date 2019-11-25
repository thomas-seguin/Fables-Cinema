import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteMovie, getMovieById } from '../../actions/movies';

const MovieItem = ({ getMovieById, deleteMovie, auth: { isAuthenticated, loading }, movie: { _id, name, rating, time } }) => {

    const authLinks = (
        <button onClick={e => deleteMovie(_id)} type="button" className="btn btn-danger">Delete Movie</button>
    );

    const guestLinks = (
        <button onClick={e => getMovieById(_id)} type="button" className="btn btn-danger">
            Buy Tickets
        </button>

    );
    return (
        <div className="profile bg-light">

            <div>
                <h2>{name}</h2>
                <h3>{rating}</h3>
                <h3>{time}</h3>
                <p>{_id}</p>
                {loading && (isAuthenticated ? authLinks : guestLinks)}

            </div>
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    getMovieById: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { getMovieById, deleteMovie })(MovieItem)
