import * as actions from '../../src/actions/actions';
import reducer from '../../src/reducers/reducers';
import {EXPENSES} from "../../src/resources/expenseResource";

describe('reducers', () => {
    it('should return unchanged state when action is invalid', () => {
        const initialState = {line: 'Hello!'};
        expect(reducer(initialState, {})).toBe(initialState);
    });

    it('should set showSpinner flag to true on SHOW_SPINNER action', () => {
        //given
        const action = {type: actions.SHOW_SPINNER};
        let initialState = undefined;

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: [], showSpinner: true, error: undefined});
        expect(result).not.toBe(initialState);
    });

    it('should return expenses on FETCH_EXPENSES_SUCCESS action', () => {
        //given
        const action = {type: actions.FETCH_EXPENSES_SUCCESS, payload: EXPENSES};
        let initialState = {showSpinner: true, error: 'error'};

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: EXPENSES, showSpinner: false, error: undefined});
        expect(result).not.toBe(initialState);
    });

    it('should return error message on SHOW_ERROR action', () => {
        //given
        const action = {type: actions.SHOW_ERROR, payload: "error message"};
        let initialState = undefined;

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({expenses: [], showSpinner: false, error: "error message"});
        expect(result).not.toBe(initialState);
    });

    it('should return 200 on SUBMIT_EXPENSES_SUCCESS action', () => {
        //given
        const action = {type: actions.SUBMIT_EXPENSE_SUCCESS, payload: {"id": "1", "message": "Successfully saved expense."}};
        let initialState = {showSpinner: true, error: 'error'};

        //when
        let result = reducer(initialState, action);

        //then
        expect(result).toEqual({showSpinner: false, error: 'Successfully saved expense.'});
        expect(result).not.toBe(initialState);
    });
});