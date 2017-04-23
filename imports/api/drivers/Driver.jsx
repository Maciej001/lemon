import React, { Component } from 'react';

class Driver extends Component {
  render() {
    return (
      <div>{`Driver: ${Meteor.userId()}`}</div>
    );
  }
}

export default Driver;
