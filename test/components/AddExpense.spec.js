import React from 'react';
import AddExpense from '../../src/components/AddExpense';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';

describe('AddExpense', () => {

    describe('Render', () => {
        it('should be correct on initial render', () => {
            const wrapper = shallow(<AddExpense/>);
            expect(wrapper.find('FormControl').length).toBe(3);

            expect(wrapper.find('ControlLabel').at(0).html()).toContain("Amount");
            expect(wrapper.find('FormControl#amount-integer').prop('value')).toBe(0);

            expect(wrapper.find('ControlLabel').at(1).html()).toContain("Date");
            expect(wrapper.find('FormControl#date').prop('value')).toBe(moment().format('YYYY-MM-DD'));

            expect(wrapper.find('ControlLabel').at(2).html()).toContain("Category");
            expect(wrapper.find('FormControl#category').prop('value')).toBe("NONE");
            expect(wrapper.find('FormControl option').length).toBe(3);

            expect(wrapper.find('Button').html()).toContain('Add');
        });
    });

    describe('Behavior', () => {
        it('should submit expense with date in correct format when ADD button is clicked', () => {
            const submitSpy = sinon.spy();
            const wrapper = shallow(<AddExpense onSubmit={submitSpy}/>);

            wrapper.find('Button').simulate('click');

            const expectedExpense = {
                amount: 0,
                userId: '1',
                date: moment().startOf('day').toISOString(),
                category: 'NONE'
            };
            expect(submitSpy.firstCall.args[0]).toEqual(expectedExpense);
        });

        it('should update date field on change', () => {
            const wrapper = shallow(<AddExpense />);

            wrapper.find('FormControl#date').simulate('change', {target: {value: '2099-01-01'}});

            expect(wrapper.find('FormControl#date').prop('value')).toBe('2099-01-01');
        });

        it('should udpate category on change', () => {
            const wrapper = shallow(<AddExpense />);

            wrapper.find('FormControl#category').simulate('change', {target: {value: 'FOOD'}});

            expect(wrapper.find('FormControl#category').prop('value')).toBe('FOOD');
        });

        it('should update amount field if a valid number is entered', () => {
            const wrapper = shallow(<AddExpense />);

            wrapper.find('FormControl#amount-integer').simulate('change', {target: {value: '200'}});

            expect(wrapper.find('FormControl#amount-integer').prop('value')).toBe(200);
        });

        it('should not update amount field if invalid value is entered', () => {
            const wrapper = shallow(<AddExpense />);

            wrapper.find('FormControl#amount-integer').simulate('change', {target: {value: 'a'}});

            expect(wrapper.find('FormControl#amount-integer').prop('value')).toBe(0);
        });
    });
});