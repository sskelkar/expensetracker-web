import React from 'react';
import PropTypes from 'prop-types';
import AddExpense from '../containers/AddExpense';

export default class Dashboard extends React.Component {
    componentWillMount() {
        this.props.fetchExpenses();
    }

    render() {
        let {showSpinner, error} = this.props,
            expenses = this.props.expenses || [];
        return (
            <div id="outer">
                <p>{error || ''}</p>
                <h1>Dashboard</h1>
                <div id="inner">
                    Your expenses this month are:
                    {showSpinner ? <h1>Loading...</h1> : expenses.length}
                </div>

                <AddExpense />
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchExpenses: PropTypes.func,
    expenses: PropTypes.array,
    showSpinner: PropTypes.bool,
    error: PropTypes.string
};
