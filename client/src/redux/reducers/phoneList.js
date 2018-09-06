import { phoneList } from '../actionTypes';

const defaultState = {
    list: [],
    loading: true,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case phoneList:
            return { ...state, ...action };
        default:
            return state;
    }
};