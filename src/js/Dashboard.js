import React from 'react';
import {connect} from 'react-redux';
import {getNextLine} from './actions';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }

    render() {
        let {line, getNextLine} = this.props;
        return (
            <div onClick={() => getNextLine(this.count++)}>
                <h2>{line || "Click me!"}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    line: state.line
});

const mapDispatchToProps = {
    getNextLine
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
