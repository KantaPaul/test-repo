import React from 'react';
import {Link} from 'react-router-dom';

let NotFound = () => (
  <div className="not-found">
    <h2 className="display-2">404! :(</h2>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
)

export {NotFound as default};