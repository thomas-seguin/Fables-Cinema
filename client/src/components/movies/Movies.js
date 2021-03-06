import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MovieItem from './MovieItem';
import { getMovies } from '../../actions/movies';
import { rBought } from '../../actions/ticket';

const Movies = ({ rBought, getMovies, movies: { movies, loading, selected } }) => {
    useEffect(() => {
        getMovies();
        rBought();
    }, [getMovies, rBought]);

    if (selected) {
        return <Redirect to='/tickets' />
    }

    return (
        <Fragment>
            {loading ? <Spinner /> :
                <Fragment>
                    <h1 className="large text-primary">Movies</h1>
                    <p className="lead">
                        Buy A Ticket For A Movie
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
    rBought: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies, rBought })(Movies)