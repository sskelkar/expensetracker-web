import * as actions from '../../src/actions/actions';
import reducer from '../../src/reducers/reducers';
import {EXPENSES} from "../../src/resources/expenseResource";

describe('reducers', () => {
    it('should return unchanged state when action is invalid', () => {
        const initialState = {line: 'Hello!'};
        expect(reducer(initialState, {})).toBe(initialState);
    });

    it('should set isFetchingExpenses flag to true on FETCH_EXPENSES_INIT action', () => {
        //given
        const action = {type: actions.FETCH_EXPENSES_INIT};
        let initialState = undefined;

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: [], isFetchingExpenses: true, error: undefined});
        expect(result).not.toBe(initialState);
    });

    it('should return expenses on FETCH_EXPENSES_SUCCESS action', () => {
        //given
        const action = {type: actions.FETCH_EXPENSES_SUCCESS, payload: EXPENSES};
        let initialState = {isFetchingExpenses: true, error: 'error'};

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: EXPENSES, isFetchingExpenses: false, error: undefined});
        expect(result).not.toBe(initialState);
    });

    it('should return error message on FETCH_EXPENSES_FAIL action', () => {
        //given
        const action = {type: actions.FETCH_EXPENSES_FAIL, payload: "error message"};
        let initialState = undefined;

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: [], isFetchingExpenses: false, error: "error message"});
        expect(result).not.toBe(initialState);
    });
});