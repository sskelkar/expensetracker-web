import {fetchExpensesFromAPI, submitExpenseToAPI} from '../resources/expenseResource'

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
export const SUBMIT_EXPENSE_SUCCESS = 'SUBMIT_EXPENSE_SUCCESS';

export function showSpinner() {
    return {
        type: SHOW_SPINNER
    };
}

export function showError(error) {
    return {
        type: SHOW_ERROR,
        payload: error
    }
}

export function receiveExpensesResult(expenses) {
    return {
        type: FETCH_EXPENSES_SUCCESS,
        payload: expenses
    }
}

export function receiveSubmitResult(apiMessages) {
    return {
        type: SUBMIT_EXPENSE_SUCCESS,
        payload: apiMessages
    }
}

export function fetchExpenses() {
    return (dispatch) => {
        dispatch(showSpinner());
        return fetchExpensesFromAPI()
            .then((data) => {
                dispatch(receiveExpensesResult(data))
            })
            .catch((err) => {
                dispatch(showError("Failed to fetch expenses"));
            });
    }
}

export function submitExpense(expense) {
    return (dispatch) => {
        dispatch(showSpinner());
        return submitExpenseToAPI(expense)
            .then((data) => {
                dispatch(receiveSubmitResult(data))
            })
            .catch((err) => {
                dispatch(showError("Failed to save expense"));
            });
    }
}