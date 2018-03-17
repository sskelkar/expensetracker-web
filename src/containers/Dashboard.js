import React from 'react'
import {connect} from 'react-redux'
import {getNextLine, fetchExpenses} from '../actions/actions';
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        line: state.line
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpenses: () => dispatch(fetchExpenses()),
        getNextLine: (index) => dispatch(getNextLine(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);