import React, { Component } from 'react';
import NewCourseCity from './NewCourseCity'
import NewCourseAirport from './NewCourseAirport'

const NewCourse = (props) => {
  console.log(`props`, props);
  return (
    <div>
      {
        props.location.query.destination === 'city'
          ? <NewCourseCity />
          : <NewCourseAirport />
      }
    </div>
  )
};

export default NewCourse;
