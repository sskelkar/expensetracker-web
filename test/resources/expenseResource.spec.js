import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {fetchExpensesFromAPI, submitExpenseToAPI} from '../../src/resources/expenseResource'

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

    it("'submitExpensesToAPI' should return 200 with success message and id", (done) => {
        //given
        const expenseToSave = {
            "amount": "11.00",
            "category": "food",
            "userId": "sojjwal",
            "date": "2018-01-17T20:53:14.045"
        };
        const mock = new MockAdapter(axios);
        mock.onPost(expense_api_url + '/expense').reply(200, {"id": "1", "message": "Successfully saved expense."});

        //when
        const promiseResponse = submitExpenseToAPI(expenseToSave);

        //then
        promiseResponse.then(response => {
            expect(response).toEqual({"id": "1", "message": "Successfully saved expense."});
        }).then(done);
    });
});