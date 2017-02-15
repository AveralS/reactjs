import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterRange from './Filter/datepicker'
import articleSelected from './Filter/articlePicker'

export default combineReducers({
    count: counterReducer,
    articles,
    filterRange,
    articleSelected
})