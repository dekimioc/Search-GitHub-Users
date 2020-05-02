import {
    GET_INPUT_VALUE,
} from './action.types';

const initialState = {
    name: '',
    userName: '',
    userDescription: '',
    avatar: '',
    userRepoLink: '',
    userRepos: [],
    inputValue: '',
    error: null
}

const apiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.e
            }
        default:
            return state
    }
}

export default apiDataReducer;
