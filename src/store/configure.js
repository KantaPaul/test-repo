import {createStore, combineReducers} from 'redux';
import expenseReducers from '../reducers/expenses';
import filterReducers from '../reducers/filter';

export default  () => {
  // store create
  let store = createStore(
    combineReducers({
      expenses: expenseReducers,
      filters: filterReducers
    })
  );
  return store;
}