import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getMovieById } from '../../actions/movies';

const Movie = ({ getMovieById, movies: { movie, loading }, match }) => {
    useEffect(() => {
        getMovieById(match.params.id);

    }, [getMovieById, match.params.id])
    return (
        <Fragment>
            {movie === null || loading ? <Spinner /> : <Fragment>

                <h1>{movie.name}</h1>
            </Fragment>}
        </Fragment>
    )
}

Movie.propTypes = {
    getMovieById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movies: state.movies,

})

export default connect(mapStateToProps, { getMovieById })(Movie)