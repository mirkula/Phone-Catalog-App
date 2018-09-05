import * as actions from '../phoneList';
import * as types from '../../actionTypes';

describe('actions', () => {
    it('should create an action to add record', () => {
        const record = {id: 1, image: "http://image.com/image.png"}
        const expectedAction = {
            type: types.currentRecord,
            record
        }
        expect(actions.setRecord(record)).toEqual(expectedAction)
    });

    it('should create an action to resave list of phones', () => {
        const list = [{id: 1, image: "http://image.com/image.png"}]
        const expectedAction = {
            type: types.phoneList,
            list
        }
        expect(actions.phoneListAction(list)).toEqual(expectedAction)
    })
})