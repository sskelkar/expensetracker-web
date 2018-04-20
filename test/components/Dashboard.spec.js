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
            showSpinner: false
        };
    });

    it('should be correct on initial render', () => {
        props = {...props, showSpinner: true};
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
});