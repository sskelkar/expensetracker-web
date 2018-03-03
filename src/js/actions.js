export const NEXT_LINE = 'NEXT_LINE';

export function getNextLine(index) {
    return {
        type: NEXT_LINE,
        index
    };
}