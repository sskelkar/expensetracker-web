import React from 'react'
import {connect} from 'react-redux'
import {submitExpense} from '../actions/actions';
import AddExpense from '../components/AddExpense'

const mapStateToProps = (state) => {
    return {
        message: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expenseToSubmit) => dispatch(submitExpense(expenseToSubmit)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);