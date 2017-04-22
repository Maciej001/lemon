import React from "react";
import styled from "styled-components";
import { Row, Cell } from "/imports/ui/Grid";

export const Title = styled.h1`
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.grey}
  margin-bottom: ${props =>
  props.margin ? props.theme.margins[props.margin] : props.theme.margins.md};
  padding: 0;
  display: ${props => props.inline ? "inline-block" : "block"};
  font-weight: ${props => {
  if (props.bold) return "700";
  if (props.superbold) return "800";
  return "400";
}};
`;

export const TitlePrimary = styled(Title)`
  color: ${props => props.theme.colors.primary};
`;

export const XxlTitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.xxl}
`;

export const XlTitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.xl}
`;

export const LgTitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.lg}
`;

export const MdTitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.md}
  margin-right: ${props => props.theme.margins.lg}
`;

export const SmTitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.sm};
  margin-right: ${props => props.theme.margins.sm};
`;

export const Subtitle = styled.h2`
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.grey}
  margin-bottom: ${props =>
  props.margin ? props.theme.margins[props.margin] : props.theme.margins.md};
  padding: 0;
`;

export const XlSubtitle = styled(Subtitle)`
  font-size: ${props => props.theme.fontSizes.xl}
`;

export const LgSubtitle = styled(Subtitle)`
  font-size: ${props => props.theme.fontSizes.lg}
`;

export const MdSubtitle = styled(Subtitle)`
  font-size: ${props => props.theme.fontSizes.md}
`;

export const SmSubtitle = styled(Subtitle)`
  font-size: ${props => props.theme.fontSizes.sm}
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.nm};
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.grey};
  padding-bottom: ${props => props.noMargin ? 0 : props.theme.margins.lg};
`;

export const LgText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.lg}
`;

export const MdText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.md}
`;

export const SmText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.sm}
`;

export const Image = props => <img src={props.src} alt={props.alt || ""} />;

export const ImageRound = styled.img`
  box-sizing: border-box;
  width: 100%;
  max-width: 200px;
  border: 5px solid ${props =>
  props.color ? props.theme.colors[props.color] : "none"};
  border-radius: 50%;
`;

export const ImageRoundSmall = styled(ImageRound)`
  width: 50px;
  height: 50px;
  float: left;
  margin-right: ${props => props.theme.margins.md};
`;

export const FullWidthWrapper = styled.div`
  background: ${props =>
  props.color ? props.theme.colors[props.color] : "transparent"};
  width: 100%;
  padding-top: ${props => props.theme.margins.xl};
  padding-bottom: ${props => props.theme.margins.xl};
`;

export const WithPadding = styled.div`
  padding-bottom: ${props => props.theme.margins.xl};
  padding-top: ${props => props.theme.margins.xl};
`;

export const ButtonsRow = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${props => props.theme.colors.negative};
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: bold;
  margin-right: ${props => props.theme.margins.lg}
  border-radius: 30px;
  box-shadow: 2px 2px 7px rgba(0,0,0,0.3);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background: ${props => props.theme.colors.done};
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
  }
`;

export const ButtonSm = styled(Button)`
  font-size: ${props => props.theme.fontSizes.sm};
  padding: 4px 10px;
`;

export const DangerButton = styled(Button)`
  background: ${props => props.theme.colors.secondary};
  &:hover {
    background: ${props => props.theme.colors.secondaryPale};
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
  }
`;

export const DangerButtonSm = styled(DangerButton)`
  font-size: ${props => props.theme.fontSizes.sm};
  padding: 4px 10px;
`;

export const PaddingMd = styled.div`
  padding-top: ${props => props.theme.margins.md};
  padding-bottom: ${props => props.theme.margins.md};
`;

export const Loading = () => (
  <Row>
    <Cell xs={12}>
      <MdTitle>Loading...</MdTitle>
    </Cell>
  </Row>
);
