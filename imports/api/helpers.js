import React from "react";
import { Row, Cell } from "/imports/ui/Grid";
import styled from "styled-components";
import { MdSubtitle } from "/imports/ui/Components";

export const validPassword = ({ password, confirmation }) => {
  return password === confirmation && password !== '';
};

export const validEmail = ( email ) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test( email );
}

const ErrorItem = styled(MdSubtitle)`
  font-size: ${props =>props.theme.fontSizes.nm}
  color: ${props => props.theme.colors.danger}
`;

export const Errors = ({errors}) => (
  <Row>
    <Cell xs={12}>
      {errors.map(error =>
        <ErrorItem key={error} eerror={error}>
          {error}
        </ErrorItem>
      )}
    </Cell>
  </Row>
);
