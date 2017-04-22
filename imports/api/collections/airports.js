import { Meteor } from "meteor/meteor";
import SimpleSchema from 'simpl-schema';
import { ImageSchema } from "./helperSchemas.js";

const Airports = new Meteor.Collection("airports");

Airports.Schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  city: {
    label: "City",
    type: String
  },
  country: {
    label: "Country",
    type: String
  },
  name: {
    label: "Airport name",
    type: String,
    optional: true
  },
  location: {
    type: Object
  },
  'location.$.longitude': {
    label: "Longitude",
    type: Number
  }
  'location.$.latitude': {
    label: "Latitude",
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

export default Airports;
