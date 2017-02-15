
import {SET_DATE_RANGE} from '../../constants'

export default (previousState  = {from: null, to:null}, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_DATE_RANGE:
            return payload;
    }

    return previousState;
}