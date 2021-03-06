import './routes.js';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Routes } from '/imports/startup/client/routes.js';

Meteor.startup( () => {
  render( <Routes/>, document.getElementById( 'root' ) );
});
