import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getNextLine, fetchExpenses} from '../actions/actions';

export class Dashboard extends React.Component {
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
    getNextLine: PropTypes.func.isRequired,
    expenses: PropTypes.array,
    fetchExpenses: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    expenses: state.expenses,
    line: state.line
});

const mapDispatchToProps = {
    fetchExpenses,
    getNextLine
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
