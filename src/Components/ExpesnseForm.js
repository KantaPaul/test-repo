import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

let now = moment();
console.log(now.format('YYYY Do MMMM dddd'));

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    }
  }
  onDescriptionChange = (e) => {
      let description = e.target.value
      this.setState(() => ({description}))
  }
  noteOnChange = (e) => {
    let note = e.target.value
    this.setState(() => ({ note }))
  }
  amountOnChange = (e) => {
    let amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({createdAt}))
    }
  }
  onFocusChange = ({focused}) => {
    this.setState(() => ({calenderFocused: focused}))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description and amount'}))
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmitResult({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  }
  render() {
    return (
      <div className="form-wraper">
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Description" 
              autoFocus 
              className="form-control" 
              value={this.state.description} 
              onChange={this.onDescriptionChange} 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Amount" 
              className="form-control" 
              value={this.state.amount}
              onChange={this.amountOnChange}
            />
          </div>
          <div className="form-group">
            <SingleDatePicker
              numberOfMonths={1}
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              isOutsideRange={() => false}
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Add Note" 
              className="form-control"
              value={this.state.note}
              onChange={this.noteOnChange}
            />
          </div>
          <button className="btn btn-primary">ADD EXPENSE</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;