// SET_TEXT_FILTER
export let setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export let sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
export let sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
export let setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
export let setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})