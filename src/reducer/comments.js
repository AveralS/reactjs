import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_COMMENT:
            let arr = mapToArr(state);
            arr.push(payload);
            return(arrayToMap(arr));
    }

    return state
}