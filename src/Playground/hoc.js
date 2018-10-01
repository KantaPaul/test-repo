// higher order component
// console.log('hoc')

import React from 'react';
import ReactDOM from 'react-dom';

let Info = (props) => (
  <div>
    <h1>Hello</h1>
    <p>This is info : {props.info}</p>
  </div>
)

let AdminWaring = (WrapComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info not share</p>}
      <WrapComponent {...props}/>
    </div>
  )
}

let AuthenticationInfo = (AuthInfoComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? 
      (
        <AuthInfoComponent {...props}/>
      ) : (
        <p>Please Login First</p>
      )}
    </div>
  )
}

let AdminInfo = AdminWaring(Info);
let AuthInfo = AuthenticationInfo(Info);

let app = document.getElementById('app');

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are details" />, app);
ReactDOM.render(<AuthInfo isAuth={false} info="There are details" />, app);
