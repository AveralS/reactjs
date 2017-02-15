import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterRange from './Filter/datepicker'
import articleSelected from './Filter/articlePicker'

export default combineReducers({
    count: counterReducer,
    articles,
    //не дроби редюсеры слишком сильно: объедини селект и календарь в один
    filterRange,
    articleSelected
})
