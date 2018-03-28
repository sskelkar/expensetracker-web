import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {fetchExpensesFromAPI} from '../../src/resources/expenseResource'

describe('Resources', () => {
    const expense_api_url = 'http://localhost:4444';
    it("'fetchExpensesFromAPI' should return expenses JSON", (done) => {
        //given
        const expenses = [{id: 1}];
        const mock = new MockAdapter(axios);
        mock.onGet(expense_api_url + '/expenses').reply(200, expenses);

        //when
        const promiseResponse = fetchExpensesFromAPI();

        //then
        promiseResponse.then(response => {
            expect(response).toEqual(expenses);
        }).then(done);
    });
});