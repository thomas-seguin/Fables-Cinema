import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteMovie } from '../../actions/movies';

const MovieItem = ({ deleteMovie, auth: { isAuthenticated, loading }, movie: { _id, name, rating, time } }) => {

    const authLinks = (
        <button onClick={e => deleteMovie(_id)} type="button" className="btn btn-danger">Delete Movie</button>
    );

    const guestLinks = (
        <Link to="/tickets" className="btn btn-primary">Buy Tickets</Link>
    );
    return (
        <div className="profile bg-light">

            <div>
                <h2>{name}</h2>
                <h3>{rating}</h3>
                <h3>{time}</h3>
                {!loading && (isAuthenticated ? authLinks : guestLinks)}

            </div>
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteMovie: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteMovie })(MovieItem)
