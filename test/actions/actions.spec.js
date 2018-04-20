import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as actions from '../../src/actions/actions';
import * as api from '../../src/resources/expenseResource';

describe('actions', () => {
    it('should emit SHOW_SPINNER action', () => {
        const result = actions.showSpinner();
        expect(result).toEqual({type: actions.SHOW_SPINNER});
    });

    it('should emit receive expenses result action', () => {
        let expenses = [];
        const result = actions.receiveExpensesResult(expenses);
        expect(result).toEqual({payload: expenses, type: actions.FETCH_EXPENSES_SUCCESS});
    });

    it('should emit SHOW_ERROR action with error message', () => {
        const result = actions.showError("Failed to fetch expenses");
        expect(result).toEqual({payload: "Failed to fetch expenses", type: actions.SHOW_ERROR});
    });

    describe('Fetch expenses', () => {
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
                {type: actions.SHOW_SPINNER},
                {type: actions.FETCH_EXPENSES_SUCCESS, payload: expenses}
            ];

            //when
            return store.dispatch(actions.fetchExpenses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should emit showError action when fetchExpenses fails', () => {
            //given
            stubbedApi.rejects();

            const expectedActions = [
                {type: actions.SHOW_SPINNER},
                {type: actions.SHOW_ERROR, payload: "Failed to fetch expenses"}
            ];

            //when
            return store.dispatch(actions.fetchExpenses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('Submit expense', () => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares);
        const store = mockStore({expenses: []});
        let stubbedApi;

        beforeEach(() => {
            stubbedApi = sinon.stub(api, 'submitExpenseToAPI');
        });

        afterEach(() => {
            stubbedApi.restore();
            store.clearActions();
        });

        it('should submit Expense', () => {
            //given
            const expenseToSubmit = {
                "amount": "11.00",
                "category": "food",
                "userId": "sojjwal",
                "date": "2018-01-17T20:53:14.045"
              };
            stubbedApi.resolves({"id": "1", "message": "Successfully saved expense."});

            const expectedActions = [
                {type: actions.SHOW_SPINNER},
                {type: actions.SUBMIT_EXPENSE_SUCCESS, payload: {"id": "1", "message": "Successfully saved expense."}}
            ];

            //when
            return store.dispatch(actions.submitExpense(expenseToSubmit)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});