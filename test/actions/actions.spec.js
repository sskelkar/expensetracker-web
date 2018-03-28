import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as actions from '../../src/actions/actions';
import * as api from '../../src/resources/expenseResource';

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

    describe('Async actions', () => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore({expenses: []});
        let stubbedApi;

        beforeEach(() => {
            stubbedApi = sinon.stub(api, 'fetchExpensesFromAPI');
        });

        afterEach(() => {
            stubbedApi.restore();
            store.clearActions();
        });

        it('should emit receiveExpensesResult action when fetchExpenses succeeds', () => {
            //given
            const expenses = [{id: 1}];
            stubbedApi.resolves(expenses);

            const expectedActions = [
                {type: actions.FETCH_EXPENSES_INIT},
                {type: actions.FETCH_EXPENSES_SUCCESS, payload: expenses}
            ];

            //when
            return store.dispatch(actions.fetchExpenses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should emit fetchExpensesFailed action when fetchExpenses fails', () => {
            //given
            stubbedApi.rejects();

            const expectedActions = [
                {type: actions.FETCH_EXPENSES_INIT},
                {type: actions.FETCH_EXPENSES_FAIL, payload: "Failed to fetch expenses"}
            ];

            //when
            return store.dispatch(actions.fetchExpenses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});