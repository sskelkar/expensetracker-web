import {getNextLine, NEXT_LINE, FETCH_EXPENSES, fetchExpenses} from '../src/js/actions';
import {EXPENSES} from "../src/resources/expenses";

describe('actions', () => {
   it('should emit get lyrics action', () => {
      const result = getNextLine(1);
      expect(result).toEqual({index: 1, type: NEXT_LINE});
   });

    it('should emit fetch expenses action', () => {
        const result = fetchExpenses();
        expect(result).toEqual({expenses: EXPENSES, type: FETCH_EXPENSES});
    });
});