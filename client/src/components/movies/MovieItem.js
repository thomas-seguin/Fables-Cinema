import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const MovieItem = ({ movie: { name, rating, time } }) => {
    return (
        <div className="profile bg-light">

            <div>
                <h2>{name}</h2>
                <h3>{rating}</h3>
                <h3>{time}</h3>
                <Link to="/tickets" className="btn btn-primary">Buy Tickets</Link>
            </div>
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem
