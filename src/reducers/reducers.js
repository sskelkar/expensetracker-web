import {SHOW_ERROR, SHOW_SPINNER, FETCH_EXPENSES_SUCCESS, SUBMIT_EXPENSE_SUCCESS} from '../actions/actions';

export default function reducer(state = {expenses: []}, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return {...state, showSpinner: true, error: undefined};

        case SHOW_ERROR:
            return {...state, showSpinner: false, error: action.payload};

        case FETCH_EXPENSES_SUCCESS:
            return {...state, showSpinner: false, expenses: action.payload, error: undefined};

        case SUBMIT_EXPENSE_SUCCESS:
            return {...state, showSpinner: false, error: action.payload.message};

        default:
            return state;
    }
}