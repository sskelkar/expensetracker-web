import React from 'react';
import Dashboard from '../../src/components/Dashboard';
import {shallow} from 'enzyme';

describe('Dashboard', () => {
    let props;
    beforeEach(() => {
        props = {
            expenses: [],
            fetchExpenses: () => {
            },
            isFetchingExpenses: false
        };
    });

    it('should be correct on initial render', () => {
        props = {...props, isFetchingExpenses: true};
        let wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('div#inner').text()).toBe('Your expenses this month are:Loading...');
    });

    it('should render expenses count', () => {
        let wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('div#inner').text()).toBe('Your expenses this month are:0');
    });

    it('should render error message', () => {
        let error = "Failed to fetch expenses";
        props = {...props, error};
        let wrapper = shallow(<Dashboard {...props}/>);

        expect(wrapper.find('p').text()).toBe(error);
    });

    // TODO: Kept this code for now to refer to stubbed actions
    // it('should call getNextLine function when the text is clicked', () => {
    //     let mockFunction = jest.fn();
    //     props.getNextLine = mockFunction;
    //     let wrapper = shallow(<Dashboard {...props}/>);
    //     wrapper.find('#outer').simulate('click');
    //
    //     expect(mockFunction.mock.calls.length).toBe(1);
    // });
});