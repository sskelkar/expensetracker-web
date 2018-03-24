import moxios from 'moxios';
import {fetchExpensesFromAPI} from '../../src/resources/expenseResource'

//TODO fix test for axios request
describe('Resources', () => {
    beforeEach(function () {
        // import and pass your custom axios instance to this method
        moxios.install()
    });

    afterEach(function () {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
    });

    it("'fetchExpensesFromAPI' should return expenses JSON", () => {
        //given
        const expenses = [{id: 1}];
        moxios.stubRequest('/expenses', {
            status: 200,
            response: expenses
        });

        //when
        // console.log('>>', fetchExpensesFromAPI());
        // fetchExpensesFromAPI().then(d=> expect(d).to.equal(2));

        moxios.wait(() => console.log('yo'))
        //then
    });

});