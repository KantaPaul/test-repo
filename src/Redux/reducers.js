// console.log('reducers')
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
let addexpense = (
    {
      street= '', 
      city = '', 
      amount = '', 
      license = '', 
      description= '',
      createdAt = 0
    }) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    street,
    city,
    amount,
    license,
    description,
    createdAt
  }
})

// REMOVE_EXPENSE
let removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
let editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
let setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
let sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
let sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
let setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
let setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

let expenseReducersDefaultState = [];

let expenseReducers = (state = expenseReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expenses)
      return [
        ...state,
        action.expenses
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filter reducers
let filterReducersDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

let filterReducers = (state = filterReducersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

let getVisibleExpenses = (dataExpenses, {text, sortBy, startDate, endDate}) => {
  return dataExpenses.filter((expense) => {
    let startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
}

// store create
let store = createStore(
  combineReducers({
    expenses: expenseReducers,
    filters: filterReducers
  })
);

store.subscribe(() => {
  let state = store.getState(),
      visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
})

let dataOne = store.dispatch(addexpense({description: 'Rent', amount: 300, street: 'Shyamoli', city: 'Dhaka', createdAt: -21000}));
let dataTwo = store.dispatch(addexpense({description: 'Coffee', amount: 100, street: 'Mirpur', city: 'Dhaka', createdAt: -2000}));

// store.dispatch(removeExpense({id: dataOne.expenses.id}));
// store.dispatch(editExpense(dataTwo.expenses.id, {city: 'Jhenidah'}))

// store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByDate())
store.dispatch(sortByAmount())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

// demo array data
let demoState = {
  expenses: [{
    id: 'asdfsdf',
    street: '4941  Broadcast Drive',
    city: 'HAMMOND',
    license: 'H400-0678-8305 - issued in Illinois (IL) on 12/18/2014, expires 10/26/2019',
    amount: 54500,
    description: 'January Rent',
    createdAt: 0
  }],
  filters: {
    text: 'Broadcast',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

let user = {
  name: 'Jen',
  age: 24
}

console.log({
  area: 'Shyamoli',
  ...user,
  city: 'Dhaka',
  age: 27
})