import {EXPENSES} from '../resources/expenses'

export const NEXT_LINE = 'NEXT_LINE';
export function getNextLine(index) {
    return {
        type: NEXT_LINE,
        index
    };
}

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export function fetchExpenses() {
    return {
        type: FETCH_EXPENSES,
        expenses: EXPENSES
    };
}