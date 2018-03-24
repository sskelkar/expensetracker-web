import * as actions from '../../src/actions/actions';

describe('actions', () => {
    it('should emit fetch expenses action', () => {
        const result = actions.requestFetchExpenses();
        expect(result).toEqual({type: actions.FETCH_EXPENSES_INIT});
    });

    it('should emit receive expenses result action', () => {
        let expenses = [];
        const result = actions.receiveExpensesResult(expenses);
        expect(result).toEqual({payload: expenses, type: actions.FETCH_EXPENSES_SUCCESS});
    });

    it('should emit receive expenses failed action', () => {
        const result = actions.fetchExpensesFailed();
        expect(result).toEqual({payload: "Failed to fetch expenses", type: actions.FETCH_EXPENSES_FAIL});
    });

    // TODO: fix the unit test for async action
    // it('should emit action to fetch expenses via API call', () => {
    //     let expenses = [];
    //     const result = actions.fetchExpenses();
    //     expect(result).toEqual({type: actions.FETCH_EXPENSES_SUCCESS});
    // });
});