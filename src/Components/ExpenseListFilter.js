import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import uuid from 'uuid';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null,
    id: uuid()
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}))
  };
  render() {
    return (
      <div className="mt-4">
        <input type="text" className="form-control mb-3" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select 
          value={this.props.filters.sortBy} 
          className="form-control mb-3" 
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <div className="mb-3">
          <DateRangePicker 
            startDateId={this.state.id}
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            endDateId={this.state.id}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            numberOfMonths={1}
            showClearDates={true}
          />
        </div>
      </div>
    )
  }
}

// let ExpenseListFilters = (props) => (
//   <div className="mt-4">
//     <input type="text" className="form-control" value={props.filters.text} onChange={(e) => {
//       props.dispatch(setTextFilter(e.target.value))
//     }}/>
//     <select 
//       value={props.filters.sortBy} 
//       className="form-control" 
//       onChange={(e) => {
//         if (e.target.value === 'date') {
//           props.dispatch(sortByDate());
//         } else if (e.target.value === 'amount') {
//           props.dispatch(sortByAmount());
//         }
//       }}
//     >
//       <option value="date">Date</option>
//       <option value="amount">Amount</option>
//     </select>
//   </div>
// );

let mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);