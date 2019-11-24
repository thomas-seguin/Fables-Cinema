import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MovieItem from './MovieItem';
import { getMovies } from '../../actions/movies';

const Movies = ({ getMovies, movie: { movies, loading } }) => {
    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <Fragment>
            {loading ? <Spinner /> :
                <Fragment>
                    <h1 className="large text-primary">Developers</h1>
                    <p className="lead">
                        <i className="fab fa-connectdevelop"></i> Browse and connect with developers
                </p>
                    <div className="profiles">
                        {movies.length > 0 ? (
                            movies.map(movie => (
                                <MovieItem key={movie._id} movie={movie} />
                            ))
                        ) : <h4>No Movies Found...</h4>}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

Movies.propTypes = {
    getMovies: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps, { getMovies })(Movies)