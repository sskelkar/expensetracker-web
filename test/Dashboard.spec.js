import React from 'react';
import {Dashboard} from '../src/js/Dashboard';
import {shallow} from 'enzyme';

describe('Dashboard', () => {
    let props;
    beforeEach(() => {
        props = {
            getNextLine: () => {},
            fetchExpenses: () => {},
        };
    });

    it('should be correct on initial render', () => {
        let wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('h2').text()).toBe('Click me!');
        expect(wrapper.find('div#inner').text()).toBe('Your expenses this month are:0');
    });

    it('should render correctly as per passed prop', () => {
        props.line='Hi';
        let wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('h2').text()).toBe('Hi');
    });

    it('should call getNextLine function when the text is clicked', () => {
        let mockFunction = jest.fn();
        props.getNextLine = mockFunction;
        let wrapper = shallow(<Dashboard {...props}/>);
        wrapper.find('#outer').simulate('click');

        expect(mockFunction.mock.calls.length).toBe(1);
    });
});