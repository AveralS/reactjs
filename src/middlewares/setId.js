import randomstring from 'randomstring';
import {ADD_COMMENT} from '../constants'
export default store => next => action => {
    const {type, payload, ...rest} = action;
    if(type == ADD_COMMENT){
        return next({...rest, type: ADD_COMMENT, payload: {...payload, id: randomstring.generate()}})
    }
    next(action);
}