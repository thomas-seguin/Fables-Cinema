import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { addMovie } from '../../actions/movies';
import PropTypes from 'prop-types';

export const Dashboard = ({ setAlert, addMovie, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        movieName: '',
        rating: '',
        time: ''
    });

    const { movieName, rating, time } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        addMovie(movieName, rating, time)
    };
    return (
        <Fragment>
            <h1 className='large text-primary'>Add A Movie</h1>

            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Movie Name'
                        name='movieName'
                        value={movieName}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Movie Rating'
                        name='rating'
                        value={rating}
                        onChange={e => onChange(e)}
                    />

                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Start Time'
                        name='time'
                        value={time}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Add Movie' />

            </form>

        </Fragment>
    )
}

Dashboard.propTypes = {
    setAlert: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, addMovie })(Dashboard);