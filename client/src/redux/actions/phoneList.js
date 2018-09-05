import { phoneList, currentRecord } from '../actionTypes';
import { getPhoneList } from '../../services/phones';

export const setRecord = record => ({
    type: currentRecord,
    record
});

export const phoneListAction = (list, loading) => ({
    type: phoneList,
    list,
    loading
});

export const fetchPhoneList = () => dispatch => {
    getPhoneList()
        .then(resp => dispatch(phoneListAction(resp.data, false)))
        .catch(error => dispatch(phoneListAction([], true)))
}
