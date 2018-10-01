import React from 'react';
import { connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

let ExpenseList = (props) => (
  <div>
    {/* This is expense list {props.name} */}
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
)

let mapStateToProps = (state) => {
  return {
    // name: 'Kanta'
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

let ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;