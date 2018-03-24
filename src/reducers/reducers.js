import {FETCH_EXPENSES_FAIL, FETCH_EXPENSES_INIT, FETCH_EXPENSES_SUCCESS} from '../actions/actions';

export default function reducer(state = {expenses: []}, action) {
    switch (action.type) {
        case FETCH_EXPENSES_INIT:
            return {...state, isFetchingExpenses: true, error: undefined};
        case FETCH_EXPENSES_SUCCESS:
            return {...state, isFetchingExpenses: false, expenses: action.payload, error: undefined};
        case FETCH_EXPENSES_FAIL:
            return {...state, isFetchingExpenses: false, error: action.payload};
        default:
            return state;
    }
}