import React, { PropTypes, Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux'
import {setDateRange, setArticles} from '../AC';


class Filter extends Component{
    static propTypes = {
        selectOptions: PropTypes.array
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const { from, to } = this.props.filterRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div>
                <Select options = {options} onChange={this.handleSelectChange} value={this.props.filterArticles} multi/>
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

    handleSelectChange = (selection) => {
        this.props.setArticles(selection);
    };

    handleDayClick = (e, day) => {
        this.props.setDateRange(DateUtils.addDayToRange(day, this.props.filterRange));
    }
}

export default connect((state) => {
    return {
        articles: state.articles,
        filterRange:{
            from: state.filterRange.from,
            to: state.filterRange.to
        },
        filterArticles: state.articleSelected
    }
}, { setDateRange, setArticles })(Filter)