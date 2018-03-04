import {getNextLine, NEXT_LINE} from '../src/js/actions';

describe('actions', () => {
   it('should emit action', () => {
      const result = getNextLine(1);
      expect(result).toEqual({index: 1, type: NEXT_LINE});
   });
});