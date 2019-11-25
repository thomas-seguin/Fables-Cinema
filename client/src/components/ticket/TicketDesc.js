import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const TicketDesc = ({ ticket: { ticket, loading }, movies: { movies } }) => {
    return (
        <Fragment>
            <h1>Thanks For Your Purchase</h1>
            <p className="lead">Here is your purchase details</p>
            <p>{ticket.email}</p>
            <p>{ticket.ticketNum} Tickets Bought</p>
            <p>Movie Name</p>
            <p>Movie Time</p>
            <p></p>
        </Fragment>
    )
}

TicketDesc.propTypes = {
    ticket: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    ticket: state.ticket,
    movies: state.movies
})

export default connect(mapStateToProps, {})(TicketDesc)
