import React from 'react';
import classes from '../styles/style.less';

let About = (props) => {
  // console.log(props);
    return (
      <div className={classes.red}>
        About {props.match.params.id && <strong>{props.match.params.id}</strong>}
      </div>
    )
};

export {About as default}