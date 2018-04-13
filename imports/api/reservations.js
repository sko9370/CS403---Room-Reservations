import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Reservations = new Mongo.Collection('reservations');

Meteor.methods({
    // Provides a meteor method which inserts and event into the database.
    // Validation is expected to have already occurred on this event by the time this method is called.
    "insertEvent" : function(eventDescriptionText, reservationStartTime, reservationEndTime, roomNumber) {
        check(eventDescriptionText, String);
        check(reservationStartTime, Date);
        check(reservationEndTime, Date);
        
        Reservations.insert({
          eventDescription: eventDescriptionText,
          createdAt: new Date(),
          reservationStart: reservationStartTime,
          reservationEnd: reservationEndTime,
          owner: Meteor.userId(),
          username: Meteor.user().username,
          room: roomNumber
        });
    }
});