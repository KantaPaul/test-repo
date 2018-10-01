import uuid from 'uuid';

// ADD_EXPENSE
export let addexpense = (
  {
    street= '', 
    city = '', 
    amount = '', 
    license = '', 
    description= '',
    createdAt = 0,
    note = ''
  }) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    street,
    city,
    amount,
    license,
    description,
    createdAt,
    note
  }
})

// REMOVE_EXPENSE
export let removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
export let editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})