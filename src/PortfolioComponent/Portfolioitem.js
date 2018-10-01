import React from 'react';

let ProtfolioItem = (props) => {
  console.log(props)
  return (
    <div className="portfolio-item">
      <h2 className="display-2">Portfolio Item</h2>
      {props.match.params.id && <p className="lead">The post id is <strong>{props.match.params.id}</strong></p>}
    </div>
  )
};

export default ProtfolioItem;