import { phoneList } from '../actionTypes';
import { getPhoneList } from '../../services/phones';

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
