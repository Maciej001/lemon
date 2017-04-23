import React from "react";
import { FluidContainer, Container, Row, Cell } from "/imports/ui/Grid";
import { MdTitle } from "/imports/ui/Components";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.grey };
  padding: ${props => props.theme.margins.xl} 0;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
`;

const Footer = props => (
  <FooterWrapper>
    <Container>
      <MdTitle color='transparent' bold>DRIVERS</MdTitle>
      <MdTitle color='transparent'>
        <a href="/drivers/register">
          Register
        </a>
      </MdTitle>
    </Container>
  </FooterWrapper>
);

export default Footer;
