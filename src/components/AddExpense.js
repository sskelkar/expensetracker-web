import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, ControlLabel, MenuItem, Button} from 'react-bootstrap';

export default class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: {
                amount: "0",
                category: "NONE",
                date: new Date(),
                userId: "1"
            }
        };
    }
    submit() {
        this.props.submitExpense(this.state.expense);
        console.log('clikeddddd: ',this.state);
    }
    render() {
        let {amount, date, category} = this.state.expense;
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Amount</ControlLabel>
                    <FormControl id="amount" type="text" value={amount} placeholder="Enter amount"/>

                    <ControlLabel>Date</ControlLabel>
                    <FormControl id="date" type="date"/>

                    <ControlLabel>Category</ControlLabel>
                    <FormControl componentClass="select" placeholder="Category">
                        <option value="groceries">Groceries</option>
                        <option value="food">Food</option>
                    </FormControl>
                </FormGroup>
                <Button type="submit" onClick={this.submit}>Add</Button>
            </div>
        );
    }

}

AddExpense.propTypes = {
    submitExpense: PropTypes.func,
    message: PropTypes.string
};