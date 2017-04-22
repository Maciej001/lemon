import React from "react";
import { Container, Row, Cell } from '/imports/ui/Grid';
import { LgTitle } from '/imports/ui/Components';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding-top: ${props => props.theme.margins.lg};
  padding-bottom: ${props => props.theme.margins.lg};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`

const Header = (props) => (
  <HeaderWrapper>
    <Container>
      <Row>
        <Cell xs={4}>
          <LgTitle color='primary' superbold margin='0'>Lemon</LgTitle>
        </Cell>
      </Row>
    </Container>
  </HeaderWrapper>
);

export default Header;
