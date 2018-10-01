import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpesnseForm';
import {addexpense} from '../actions/expenses';

let AddExpensePage = (props) => (
  <div>
    <h1 className="display-5">Add Expense</h1>
    <ExpenseForm 
      onSubmitResult={(expense) => {
        props.dispatch(addexpense(expense));
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage);