import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ movie: { name, rating, time } }) => {
    return (
        <div className="profile bg-light">

            <div>
                <h2>{name}</h2>
                <h3>{rating}</h3>
                <h3>{time}</h3>

            </div>
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem
