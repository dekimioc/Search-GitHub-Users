import {
    GET_INPUT_VALUE,
} from './action.types';

export const inputHandler = e => {
    return {
        type: GET_INPUT_VALUE,
        e: e
    };
};