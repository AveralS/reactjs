import {INCREMENT, DELETE_ARTICLE, SET_DATE_RANGE, SET_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}


export function setDateRange(range) {
    return {
        type: SET_DATE_RANGE,
        payload: range
    }
}

export function setArticles(articles) {
    return {
        type: SET_ARTICLE,
        payload: articles
    }
}