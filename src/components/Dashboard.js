import React from 'react';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }

    componentWillMount() {
        this.props.fetchExpenses();
    }

    render() {
        let {line, getNextLine, expenses} = this.props;
        return (
            <div id="outer" onClick={() => getNextLine(this.count++)}>
                <h1>Dashboard</h1>
                <h2>{line || "Click me!"}</h2>
                <div id="inner">
                    Your expenses this month are:
                    {expenses ? expenses.length : 0}
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    line: PropTypes.string,
    getNextLine: PropTypes.func,
    expenses: PropTypes.array,
    fetchExpenses: PropTypes.func
};
