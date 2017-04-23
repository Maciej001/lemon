import React, { Component } from "react";

import styled from "styled-components";
import { Row, Cell } from "/imports/ui/Grid";
import { LgTitle, SmTitle, Button } from "/imports/ui/Components";
import { Input } from "/imports/ui/Forms";
import { validPassword, validEmail, Errors } from "../helpers.js";
import { Link } from "react-router";
import { browserHistory } from "react-router";
import Drivers from "../collections/drivers";
import { addDriver } from "./methods.js";

const FooterWrapper = styled.div`
  margin-top: 40px;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.primaryGrey};
  padding-left: 2%;
  padding-right: 2%;
`;

const SignWrapper = styled.div`
  padding: ${props => props.theme.margins.xl} ${props => props.theme.margins.lg}
  margin: 60px auto;
  background: white;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.radius.md}
`;

const Fields = styled.div`
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  margin-top: ${props => props.theme.margins.lg};
`;

class DriverRegistration extends Component {
  state = {
    fields: {
      email: "",
      password: "",
      passwordConfirmation: "",
      firstName: "",
      lastName: "",
      imgUrl: "",
      carImgUrl: "",
      car: "",
      carType: "",
      registration: "",
      seats: ""
    },
    errors: []
  };


  formValid = () => {
    const isEmailValid = validEmail(this.state.fields.email);
    const isPasswordValid = validPassword({
      password: this.state.fields.password,
      confirmation: this.state.fields.passwordConfirmation
    });

    let errors = [];
    if (!isPasswordValid) errors = ["Wrong password"];
    if (!isEmailValid) errors = [...errors, "Wrong email"];
    if (this.state.fields.firstName === "")
      errors = [...errors, "Missing firstName"];
    if (this.state.fields.lastName === "")
      errors = [...errors, "Missing lastName"];
    if (this.state.fields.imgUrl === "") errors = [...errors, "Missing imgUrl"];
    if (this.state.fields.car === "") errors = [...errors, "Missing car"];
    if (this.state.fields.carType === "")
      errors = [...errors, "Missing carType"];
    if (this.state.fields.registration === "")
      errors = [...errors, "Missing registration"];
    if (this.state.fields.seats === "") errors = [...errors, "Missing seats"];
    this.setState({ errors });

    return !errors.length;
  };

  onChange = e => {
    const value = e.target.value;
    const dataName = e.target.dataset.name;
    this.setState({ fields: { ...this.state.fields, [dataName]: value } });
  };

  onChangeCapitalise = e => {
    const value = e.target.value;
    const dataName = e.target.dataset.name;
    this.setState({
      fields: { ...this.state.fields, [dataName]: value.toUpperCase() }
    });
  };

  onChangeNumber = e => {
    const value = e.target.value;
    const dataName = e.target.dataset.name;
    this.setState({
      fields: { ...this.state.fields, [dataName]: Number(value) }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ submittingState: "submitting" });

    if (this.formValid()) {
      const profile = _.omit(this.state.fields, [
        "email",
        "password",
        "passwordConfirmation"
      ]);
      Accounts.createUser(
        {
          email: this.state.fields.email,
          password: this.state.fields.password,
          profile
        },
        (error, res) => {
          if (error) {
            this.setState({ errors: [...this.state.errors, error.reason] });
          } else {
            addDriver.call({role: 'drivers'}, (error, result) => {
              if (error) {
                console.log("Error", error.reason)
              } else {
                console.log(`user is in role`, Roles.userIsInRole(this.userId, ['drivers'] ))
              }
            })
            browserHistory.push(`/drivers/${Meteor.userId()}`);
          }
        }
      );
    }
  };

  render() {
    const schema = Drivers.Schema._schema;

    return (
      <SignPage>
        <Row>
          <Cell xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
            <SignWrapper>
              <LgTitle bold color="lightGrey">
                Register as a Lemon driver
              </LgTitle>
              <Errors errors={this.state.errors} />
              <Fields>
                <Input
                  name="email"
                  label="Email"
                  value={this.state.fields.email}
                  onChange={this.onChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  value={this.state.fields.password}
                  onChange={this.onChange}
                  type="password"
                />
                <Input
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  value={this.state.fields.passwordConfirmation}
                  onChange={this.onChange}
                  type="password"
                />
                <Input
                  name="firstName"
                  label={schema.firstName.label}
                  value={this.state.fields.firstName}
                  onChange={this.onChange}
                  type="text"
                />
                <Input
                  name="lastName"
                  label={schema.lastName.label}
                  value={this.state.fields.lastName}
                  onChange={this.onChange}
                  type="url"
                />
                <Input
                  name="imgUrl"
                  label={schema.imgUrl.label}
                  value={this.state.fields.imgUrl}
                  onChange={this.onChange}
                  type="text"
                />
                <Input
                  name="imgUrl"
                  label={schema.carImgUrl.label}
                  value={this.state.fields.carImgUrl}
                  onChange={this.onChange}
                  type="text"
                />
                <Input
                  name="car"
                  label={schema.car.label}
                  value={this.state.fields.car}
                  onChange={this.onChange}
                  type="text"
                />
                <Input
                  name="carType"
                  label={schema.carType.label}
                  value={this.state.fields.carType}
                  onChange={this.onChange}
                  type="text"
                />
                <Input
                  name="registration"
                  label={schema.registration.label}
                  value={this.state.fields.registration}
                  onChange={this.onChangeCapitalise}
                  type="text"
                />
                <Input
                  name="seats"
                  label={schema.seats.label}
                  value={this.state.fields.seats}
                  onChange={this.onChangeNumber}
                  type="text"
                />
              </Fields>
              <ButtonRow>
                <Row>
                  <Cell xs={12} center>
                    <Button onClick={this.onSubmit}>Save</Button>
                  </Cell>
                </Row>
              </ButtonRow>
              <FooterWrapper>
                <Row>
                  <Cell xs={12} center>
                    <SmTitle inline>Already have an account?</SmTitle>
                    <Link to="/drivers/signin">Sign in</Link>
                  </Cell>
                </Row>
              </FooterWrapper>
            </SignWrapper>
          </Cell>
        </Row>
      </SignPage>
    );
  }
}

export default DriverRegistration;
