import React from 'react';

class Header extends React.Component {
  render() {
    let title = "My Header";
    return (
      <div>
        {title}
      </div>
    );
  }
};

export {Header as default}