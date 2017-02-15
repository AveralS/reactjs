import React, { PropTypes, Component } from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';
import Counter from './Counter';
import {connect} from 'react-redux';
import Filter from './Filter';


class App extends Component {

    render() {
        const {articles} = this.props;
        return (
            <div>
                <Counter/>
                <Filter />
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles.filter(article => {
        let artDate = new Date(article.date);
        if(state.filterRange.from && state.filterRange.from > artDate){
            return false;
        }

        if(state.filterRange.to && state.filterRange.to < artDate){
            return false;
        }

        if(state.articleSelected.length){
           return state.articleSelected.find((selected, index, array) => {
                return selected.value === article.id;
            });
        }
        return true;
    }),
}))(App)