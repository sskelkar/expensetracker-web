import {fetchExpensesFromAPI} from '../resources/expenseResource'

export const FETCH_EXPENSES_INIT = 'FETCH_EXPENSES_INIT';

export function requestFetchExpenses() {
    return {
        type: FETCH_EXPENSES_INIT
    };
}

export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';

export function receiveExpensesResult(expenses) {
    return {
        type: FETCH_EXPENSES_SUCCESS,
        payload: expenses
    }
}

export const FETCH_EXPENSES_FAIL = 'FETCH_EXPENSES_FAIL';

export function fetchExpensesFailed() {
    return {
        type: FETCH_EXPENSES_FAIL,
        payload: "Failed to fetch expenses"
    }
}

export function fetchExpenses() {
    return (dispatch) => {
        dispatch(requestFetchExpenses());
        fetchExpensesFromAPI()
            .then((data) => {
                dispatch(receiveExpensesResult(data))
            })
            .catch((err) => {
                console.log('ERROR: ', err);
                dispatch(fetchExpensesFailed());
            });
    }
}