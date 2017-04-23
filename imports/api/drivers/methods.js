import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { SimpleSchema } from "simpl-schema";

import Drivers from '../collections/drivers'

export const createDriver = new ValidatedMethod({
  name: "createDriver",
  validate: null,
  run({ driver }) {
    if (Meteor.isServer) {
      return Drivers.insert({ ...item, createdAt: new Date() });
    }
  }
});

export const addDriver = new ValidatedMethod({
  name: "addDriver",
  validate: null,
  run({ role }) {
    if (Meteor.isServer) {
      Roles.addUsersToRoles(this.userId, ['drivers'], 'default-group' )
    }
  }
});


export const updateDriver = new ValidatedMethod({
  name: "updateDriver",
  validate: null,
  run({ driver, driverId }) {
    if (Meteor.isServer) {
      return Drivers.update(
        { _id: driverId },
        {
          $set: {
            ...driver,
            updatedAt: new Date()
          }
        }
      );
    }
  }
});
