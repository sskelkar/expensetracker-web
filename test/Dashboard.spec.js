import React from 'react';
import {Dashboard} from '../src/js/Dashboard';
import {shallow} from 'enzyme';

describe('Dashboard', () => {
    it('should be correct on initial render', () => {
        let wrapper = shallow(<Dashboard getNextLine={()=>{}}/>);
        expect(wrapper.find('h2').text()).toBe('Click me!');
    });

    it('should render correctly as per passed prop', () => {
        let wrapper = shallow(<Dashboard getNextLine={()=>{}} line={'Hi'}/>);
        expect(wrapper.find('h2').text()).toBe('Hi');
    });

    it('should call getNextLine function when the text is clicked', () => {
        const mockFunction = jest.fn();
        let wrapper = shallow(<Dashboard getNextLine={mockFunction} />);
        wrapper.find('div').simulate('click');

        expect(mockFunction.mock.calls.length).toBe(1);
    });
});