import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import styled from "styled-components";

import { Row, Cell } from "/imports/ui/Grid";
import {
  MdTitleLight,
  MdTitle,
  ButtonSm,
  ClickableImageSm,
  DangerButtonSm,
  PaddingMd
} from "/imports/ui/Components";

export const DateInput = ({ field, onChange, index }) => (
  <Row>
    <Cell xs={12}>
      <Label>{field.label}</Label>
      <StyledInput
        data-name={field.name}
        value={field.value}
        onChange={onChange}
        type="date"
      />
    </Cell>
  </Row>
);

export const Label = styled.label`
  color: ${props => props.theme.colors.lightGrey};
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: bold;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 5px 10px;
  width: 100%;
  margin-bottom: 15px;
  height: 50px;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  outline: none;
  border-radius: ${props => props.theme.radius.sm};
  font-size: ${props => props.theme.fontSizes.nm};
  transition: all 0.2s ease-out;
  &:focus, &:active {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export const Input = ({ name, label, value, type, onChange }) => (
  <Row>
    <Cell xs={12}>
      <Label>{label}</Label>
      <StyledInput
        data-name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Cell>
  </Row>
);

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  padding: 10px 10px;
  width: 100%;
  min-height: ${props => props.long ? "400px" : "200px"};
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.colors.veryLightGrey};
  border-radius: ${props => props.theme.radius.sm};
  font-size: ${props => props.theme.fontSizes.nm};
  resize: vertical;
`;

export const Textarea = (
  { dataArray, field, onChange, value, long = false }
) => (
  <Row>
    <Cell xs={12}>
      <Label>{field.label}</Label>
      <StyledTextarea
        data-array={dataArray}
        data-name={field.name}
        value={value}
        onChange={onChange}
        long={long}
      />
    </Cell>
  </Row>
);

const StyledSelect = styled.select`
  box-sizing: border-box;
  height: 40px;
  min-width: 150px;
  font-size: ${props => props.theme.fontSizes.nm};
  color: ${props => props.theme.colors.grey};
`;

export const Options = ({ items, selected, onChange, collection }) => (
  <StyledSelect
    value={selected._id}
    onChange={onChange}
    data-collection={collection}
  >
    {items.map(item => (
      <option key={item._id} value={item._id}>{item.name}</option>
    ))}
  </StyledSelect>
);

const StyledMultipleSelect = styled.select`
  box-sizing: border-box;
  min-width: 150px;
  font-size: ${props => props.theme.fontSizes.nm};
  color: ${props => props.theme.colors.grey};
  padding: ${props => props.theme.margins.md};
  border-radius: ${props => props.theme.radius.sm};
`;

export const MultipleOptions = ({ items, selected, onChange, collection }) => (
  <StyledMultipleSelect
    value={selected}
    onChange={onChange}
    data-collection={collection}
    multiple
    size={5}
  >
    {items.map(item => (
      <option key={item._id} value={item._id}>{item.name}</option>
    ))}
  </StyledMultipleSelect>
);
