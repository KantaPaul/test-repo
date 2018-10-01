import React from 'react';
import {Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-1">404!</h1>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    )
  }
}

export {NotFound as default}