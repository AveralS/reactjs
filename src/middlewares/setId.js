import randomstring from 'randomstring';
import {ADD_ID} from '../constants'
export default store => next => action => {
    const {type, payload, ...rest} = action;
    console.log(action);
    if(type == ADD_ID){
        payload.id = randomstring.generate();
    }
    next(action);
}