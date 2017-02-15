import {SET_ARTICLE} from '../../constants'

export default (previousState  = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_ARTICLE:
            return payload;
    }

    return previousState;
}