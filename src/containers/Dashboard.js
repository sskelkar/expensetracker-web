import React from 'react'
import {connect} from 'react-redux'
import {fetchExpenses} from '../actions/actions';
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        showSpinner: state.showSpinner,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpenses: () => dispatch(fetchExpenses()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);