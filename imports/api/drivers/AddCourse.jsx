import React, { Component } from 'react';
import { WithPadding, MdTitle } from '/imports/ui/Components';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '/imports/ui/Grid';

const AddCourseButton = styled.a`
  display: inline-block;
  box-sizing: border-box;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.transparent};
  font-size: ${props => props.theme.fontSizes.md}
  padding: 15px 20px;
  width: 50%;
  text-align: center;
  &:first-of-type {
    border-right: 2px solid white;
  }
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
  }
`

class AddCourse extends Component {
  render() {
    return (
      <WithPadding>
        <Row>
          <Cell xs={12}>
            <MdTitle color='grey' bold>Add course</MdTitle>
            <AddCourseButton href={`/drivers/newcourse/${Meteor.userId()}?destination=city`}>From airport</AddCourseButton>
            <AddCourseButton href={`/drivers/newcourse/${Meteor.userId()}?destination=airport`}>From city</AddCourseButton>
          </Cell>
        </Row>
      </WithPadding>
    );
  }
}

export default AddCourse;
