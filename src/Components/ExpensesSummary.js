import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpense from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses.total';

let ExpesesSummary = ({expenseCount, expensesTotal}) => {
  let expenseWord = expenseCount === 0 ? 'expense' : 'expemses';
  let formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1 className="display-5">
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
    </div>
  )
};

let MapStateToProps = (state) => {
  let visibileExpenses = selectExpense(state.expenses, state.filters);
  return {
    expenseCount: visibileExpenses.length,
    expensesTotal: selectExpenseTotal(visibileExpenses)
  }
}

export default connect(MapStateToProps)(ExpesesSummary);