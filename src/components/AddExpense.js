import React from 'react';
import PropTypes from 'prop-types';
import {Button, ControlLabel, FormControl} from 'react-bootstrap';
import moment from 'moment';

export default class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount_integer_part: 0,
            amount_decimal_part: 0,
            category: "NONE",
            date: moment().format('YYYY-MM-DD'),
            userId: "1"
        };
    }

    handleIntegerChange(field, value) {
        const numeric = /^([0-9]*)$/;

        if (numeric.exec(value) != null) {
            this.handleChange(field, Number(value));
        }
    }

    handleChange(field, value) {
        this.setState({[field]: value});
    }

    submit() {
        const {category, date, userId} = this.state;
        const amount = this.state.amount_integer_part;
        const isoDate = moment(date).startOf('day').toISOString();
        this.props.onSubmit({amount, category, date: isoDate, userId});
    }

    render() {
        let {amount_integer_part, date, category} = this.state;
        return (
            <div>
                <ControlLabel>Amount</ControlLabel>
                <FormControl id="amount-integer"
                             type="text"
                             value={amount_integer_part}
                             onChange={(e) => this.handleIntegerChange('amount_integer_part', e.target.value)}
                             placeholder="Enter amount"/>

                <ControlLabel>Date</ControlLabel>
                <FormControl id="date"
                             type="date"
                             value={date}
                             onChange={(e) => this.handleChange('date', e.target.value)}/>

                <ControlLabel>Category</ControlLabel>
                <FormControl id="category"
                             componentClass="select"
                             value={category}
                             placeholder="Category"
                             onChange={(e) => this.handleChange('category', e.target.value)}>
                    <option value="GROCERIES">Groceries</option>
                    <option value="FOOD">Food</option>
                    <option value="TRANSPORT">Transportation</option>
                </FormControl>

                <Button type="submit"
                        onClick={() => this.submit()}>
                    Add
                </Button>
            </div>
        );
    }

}

AddExpense.propTypes = {
    onSubmit: PropTypes.func,
};