import reducer from '../phoneList';
import * as types from '../../actionTypes';

describe('phoneList reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                list: [],
                loading: true,
            }
        )
    })
})