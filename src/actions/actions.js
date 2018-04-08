import {fetchExpensesFromAPI, submitExpenseToAPI} from '../resources/expenseResource'

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

export const SUBMIT_EXPENSE_SUCCESS = 'SUBMIT_EXPENSE_SUCCESS';

export function receiveSubmitResult(apiMessages) {
    return {
        type: SUBMIT_EXPENSE_SUCCESS,
        payload: apiMessages
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
        return fetchExpensesFromAPI()
            .then((data) => {
                dispatch(receiveExpensesResult(data))
            })
            .catch((err) => {
                dispatch(fetchExpensesFailed());
            });
    }
}

export function submitExpense(expense) {
    return (dispatch) => {
        dispatch(requestFetchExpenses());
        return submitExpenseToAPI(expense)
            .then((data) => {
                dispatch(receiveSubmitResult(data))
            })
            .catch((err) => {
                dispatch(fetchExpensesFailed());
            });
    }
}