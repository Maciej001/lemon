import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { WithPadding, Image, LgTitle, MdSubtitle, MdText } from '/imports/ui/Components';
import { FluidContainer, Container, Row, Cell } from '/imports/ui/Grid';
import styled from 'styled-components';

import AddCourse from './AddCourse'

const Car = styled.div`
  position: relative;
  box-sizing: border-box;
  background-image: url(${props => props.carImgUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
`

const DriverImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  left: calc(50% - 50px);
`

const Padding = styled.div`
  padding-top: 70px;
`

class DriverComponent extends Component {

  ownsProfile = () => {
    return Meteor.userId() === this.props.params.driverId;
  }

  render() {
    const { driver } = this.props;
    return (
      <div>
        <Car carImgUrl={driver.carImgUrl}>
          <DriverImage src={driver.imgUrl}/>
        </Car>
        <Container className='container'>
          <Padding>
            <Row className='what?'>
              <Cell xs={12} center>
                <LgTitle color='lightGrey' bold inline>{`${driver.firstName}`}</LgTitle>
              </Cell>

              <Cell xs={12}>
                <MdSubtitle color='grey' margin='0' bold>CAR</MdSubtitle>
                <MdText color='lightGrey'>{driver.car}</MdText>

                <MdSubtitle color='grey' margin='0' bold inline>REGISTRATION</MdSubtitle>
                <MdText color='lightGrey'>{driver.registration}</MdText>

                <MdSubtitle color='grey' margin='0' bold inline>CAR TYPE</MdSubtitle>
                <MdText color='lightGrey'>{driver.carType}</MdText>

                <MdSubtitle color='grey' margin='0' bold inline>SEATS</MdSubtitle>
                <MdText color='lightGrey'>{driver.seats}</MdText>
              </Cell>

              { this.ownsProfile() &&
                <Cell xs={12}>
                  <AddCourse/>
                </Cell>}

            </Row>
          </Padding>
        </Container>
      </div>
    );
  }
}

const Driver = createContainer(
  () => {
    const  driverHandle = Meteor.subscribe('driverProfile', Meteor.userId());
    let driverLoaded = driverHandle.ready();
    let driver = Meteor.users
      .findOne(Meteor.userId(), { fields: { profile: 1 }  })
    return {
      driverLoaded,
      driver: driverLoaded ? driver.profile : {}
    };
  },
  DriverComponent
);

export default Driver;
