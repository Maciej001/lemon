import { Meteor } from "meteor/meteor";
import SimpleSchema from 'simpl-schema';
import { ImageSchema } from "./helperSchemas.js";

const Drivers = new Meteor.Collection("drivers");

Drivers.Schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  firstName: {
    label: "First name",
    type: String
  },
  lastName: {
    label: "Last name",
    type: String
  },
  imgUrl: {
    label: "Profile image URL",
    type: String
  },
  car: {
    label: "Car description",
    type: String
  },
  registration: {
    label: "Car registration id",
    type: Number
  },
  carType: {
    label: "Car type", // available: private, taxi, bus
    type: String
  },
  seats: {
    label: "Number of seats",
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
