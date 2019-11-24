import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyTickets } from '../../actions/ticket';

const Ticket = ({ buyTickets }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ticketNum: ''
    });

    const { name, email, ticketNum } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        buyTickets({ name, email, ticketNum });

    };

    return (
        <Fragment>
            <h1 className='large text-primary'>Buy Tickets</h1>

            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                    />

                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Number of Tickets'
                        name='ticketNum'
                        value={ticketNum}
                        onChange={e => onChange(e)}
                    />
                </div>

                <input type='submit' className='btn btn-primary' value='Register' />

            </form>

        </Fragment>
    );
};

Ticket.propTypes = {
    buyTickets: PropTypes.func.isRequired,
}


export default connect(null, { buyTickets })(Ticket);