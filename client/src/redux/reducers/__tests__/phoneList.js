import reducer from '../phoneList';
import * as types from '../../actionTypes';

describe('phoneList reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                list: [],
                loading: true,
                record: {}
            }
        )
    })

    it('should handle currentRecord', () => {
        expect(
            reducer(undefined, {
                type: types.currentRecord,
                record: { id: 1, image: "http://image.com/image.png" }
            })
        ).toEqual(
            {
                list: [],
                loading: true,
                record: { id: 1, image: "http://image.com/image.png" }
            }
        )
    })
})