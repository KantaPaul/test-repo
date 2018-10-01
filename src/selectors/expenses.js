import moment from 'moment';

// get visible expenses
let getVisibleExpenses = (dataExpenses, {text, sortBy, startDate, endDate}) => {
  return dataExpenses.filter((expense) => {
    // let startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    // let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    let createdMoment = moment(expense.createdAt);
    let startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
    let endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
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

export default getVisibleExpenses;