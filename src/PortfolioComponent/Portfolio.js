import React from 'react';
import {Link} from 'react-router-dom';

let Portfolio = () => (
  <div className="portfolio">
    <h2 className="display-2">Portfolio</h2>
    <div className="row">
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/portfolio/1" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/portfolio/2" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio;