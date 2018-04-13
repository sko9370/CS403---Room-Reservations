import { Meteor } from 'meteor/meteor';
import '../imports/api/reservations.js';

Meteor.startup(() => {
  // code to run on server at startup
});

console.log(Meteor.isProduction);
console.log(Meteor.isDevelopment);