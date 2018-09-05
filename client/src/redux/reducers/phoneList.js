import { phoneList, currentRecord } from '../actionTypes';

const defaultState = {
    list: [],
    loading: true,
    record: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case phoneList:
            return { ...state, ...action };
        case currentRecord:
            return { ...state, record: action.record };
        default:
            return state;
    }
};