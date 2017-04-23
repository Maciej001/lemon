import { Meteor } from "meteor/meteor";

Meteor.publish("driverProfile", function(driverId) {
  return Meteor.users.find(driverId, { fields: { profile: 1 } });
});
