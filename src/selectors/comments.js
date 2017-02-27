import {createSelector} from 'reselect'
import {mapToArr} from '../utils'

const commentsGetter = state => state.comments.entities
const idsGetter = (state, props) => props.article.comments

export const commentsSelectorFactory = () => createSelector(commentsGetter, idsGetter, (entities, ids) => {
    //.filter вообще не должно работать, ведь там Map хранится
    return entities.filter(ent => {
        return ids.includes(ent.id)
    })
});
