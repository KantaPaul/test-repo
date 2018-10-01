import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

let ExpenseListItem = ({id, description, amount, createdAt, note}) => (
  <div>
    <h3>{description}</h3>
    <p>
      {numeral(amount / 100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    <p>{note}</p>
    <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;