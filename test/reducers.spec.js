import {NEXT_LINE} from '../src/js/actions';
import reducer from '../src/js/reducers';

describe('reducers', () => {
    it('should return first line when index%3 is 0', () => {
        const action = {type: NEXT_LINE, index: 0};
        expect(reducer({}, action)).toEqual({line: 'Hello!'});
    });

    it('should return first line when index%3 is 1', () => {
        const action = {type: NEXT_LINE, index: 1};
        expect(reducer({}, action)).toEqual({line: 'I love you'});
    });

    it('should return first line when index%3 is 2', () => {
        const action = {type: NEXT_LINE, index: 2};
        expect(reducer({}, action)).toEqual({line: `Won't you tell me your name`});
    });

    it('should return unchanged state when action is invalid', () => {
        const initialState = {line: 'Hello!'};
        expect(reducer(initialState, {})).toBe(initialState);
    });
});