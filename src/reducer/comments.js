import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'
import {DefaultReducerState} from './helpers'


const CommentModel = Record({
    id: null,
    user: null,
    text: null,
})

const defaultState = new DefaultReducerState()

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.updateIn(['entities'], comments => {
                //почему new Map и .concat?
                return comments.concat(new Map({...payload.comment, id: randomId}))
            });
        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('isLoading', true)
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state
                .set('isLoading', false)
                .updateIn(['entities'], comments => {
                    //почему .concat ? это же Map - используй .merge
                    return comments.concat(arrayToMap(response, CommentModel))
                });
    }

    return state
}
