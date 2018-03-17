import {FETCH_EXPENSES, NEXT_LINE} from './actions';

const lyrics = [
    'Hello!',
    'I love you',
    "Won't you tell me your name"
];

export default function reducer(state = {expenses: []}, action) {
    switch (action.type) {
        case NEXT_LINE:
            const index = action.index % 3;
            return Object.assign({}, state, {line: lyrics[index]});
        case FETCH_EXPENSES:
            return Object.assign({}, state, {expenses: action.expenses});
        default:
            return state;
    }
}