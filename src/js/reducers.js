import {NEXT_LINE} from './actions';

const lyrics = [
    'Hello!',
    'I love you',
    "Won't you tell me your name"
];

export default function reducer(state = {}, action) {
    if (action.type === NEXT_LINE) {
        const index = action.index % 3;

        return {
            line: lyrics[index]
        };
    } else {
        return state;
    }
}