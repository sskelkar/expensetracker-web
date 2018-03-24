import React from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
    componentWillMount() {
        this.props.fetchExpenses();
    }

    render() {
        let {isFetchingExpenses, error} = this.props,
            expenses = this.props.expenses || [];
        return (
            <div id="outer">
                <p>{error || ''}</p>
                <h1>Dashboard</h1>
                <div id="inner">
                    Your expenses this month are:
                    {isFetchingExpenses ? <h1>Loading...</h1> : expenses.length}
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchExpenses: PropTypes.func,
    expenses: PropTypes.array,
    isFetchingExpenses: PropTypes.bool,
    error: PropTypes.string
};
