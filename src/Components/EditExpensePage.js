import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpesnseForm';
import {editExpense, removeExpense} from '../actions/expenses';

let EditExpensePage = (props) => {
  console.log(props)
  return (
    <div className="mt-3">
      <ExpenseForm 
        expense = {props.expense}
        onSubmitResult={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }))
        props.history.push('/');
      }} className="btn btn-danger">Remove</button>
    </div>
  )
}

let mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);