import { Meteor } from "meteor/meteor";
import SimpleSchema from 'simpl-schema';
import { ImageSchema } from "./helperSchemas.js";

const Drivers = new Meteor.Collection("drivers");

Drivers.Schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  from: {
    type: Object
  },
  'from.$.longitude': {
    label: "Longitude",
    type: Number
  },
  'from.$.latitude': {
    label: "Latitude",
    type: Number
  },
  'from.$.street': {
    label: "Street",
    type: Number,
    optional: true
  },
  'from.$.streetNumber': {
    label: "Street number",
    type: Number,
    optional: true
  },
  'from.$.city': {
    label: "City",
    type: Number
  },
  'from.$.country': {
    label: "Country",
    type: Number,
    defaultValue: 'Poland'
  },
  destination: {
    type: Object
  },
  'destination.$.name': {
    label: "Destination name",
    type: Number
  },
  'destination.$.longitude': {
    label: "Longitude",
    type: Number
  },
  'destination.$.latitude': {
    label: "Latitude",
    type: Number
  },
  'destination.$.street': {
    label: "Street",
    type: Number,
    optional: true
  },
  'destination.$.streetNumber': {
    label: "Street number",
    type: Number,
    optional: true
  },
  'destination.$.city': {
    label: "City",
    type: Number
  },
  'destination.$.country': {
    label: "Country",
    type: Number,
    defaultValue: 'Poland'
  },
  driverId: {
    label: "Driver",
    type: String
  },
  date: {
    label: "Date and time",
    type: Date
  },
  price: {
    label: "Price",
    type: String
  },
  seatsLeft: {
    label: "seats left",
    type: Number
  },
  createdAt: {
    label: "Created At",
    type: Date,
    optional: true
  },
  updatedAt: {
    label: "Updated At",
    type: Date,
    optional: true
  }
});

export default Drivers;
