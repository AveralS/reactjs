import React, { PopTypes, Component } from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';
import moment from 'moment';


const WEEKDAYS_LONG = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const WEEKDAYS_SHORT = ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пя', 'Су'];
const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'];



class DatePickerCustom extends Component{
    state = {
        from: null,
        to: null,
    }

    render(){
        const { from, to } = this.state;
        return (
            <div>
                { !from && !to && <p>Выберите <strong>первый день</strong>.</p> }
                { from && !to && <p>Выберите <strong>Второй день</strong>.</p> }
                { from && to &&
                <p>
                    С { moment(from).format('L') } по { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Сбросить</a>
                </p>
                }
                <DayPicker
                    locale="ru"
                    months={ MONTHS }
                    weekdaysLong={ WEEKDAYS_LONG }
                    weekdaysShort={ WEEKDAYS_SHORT }
                    firstDayOfWeek={ 1 }
                    numberOfMonths={ 1 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }
}

export default DatePickerCustom;