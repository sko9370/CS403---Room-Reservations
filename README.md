# room_reservation_meteor

This is an individual assignment.  This 60 point mini-project is to earn the 60 points you missed out on by having already completed the 3 code school courses in CY355, as well as provide a "more gentle" introduction to some of the concepts you'll be observing in the Roborally meteor game used for Milestones 6 and 7.  You are to extend the functionality of the new CS403 Meteor Room Booking Program (MRBP) provided in the <GITHUB REPO LINK HERE>.  Clone this repository and get the meteor project up and running.

This program is intended to allow different users to collaborate and share a common room.  The current functionality of the room reservation system is as follows:

- This program assumes the current year is 2018 and does not support adding dates for other years.
- In order to see the room reservation system, you must be logged into the system.
- Once logged into the system, you see the next five reservations for room 101 (assuming there are any).
- You can create a new reservation by filling out the event description and using the drop down boxes to select the month, day, start time, and end time of your event.
- The room is booked for the user currently signed in.
- The form for adding new reservations has some logic built into it.  Firstly, they user must have all fields filled out for the reservation to complete.  Also, the user is not allowed to have an end date for the reservation which is before their chosen start date.

Extend the code by adding the following additional functionality:

- Currently, room 101 is hard coded into program, and this program only supports tracking events for one room.  Extend the program to allow users to make reservations for 8 different rooms.  After signing in, the user will be allowed to choose which room they would like to reserve (use rooms 101-108).  After selecting the room they would like to reserve, they will be allowed to use the provided reservation form to add a new event for this room.
- The "next 5 upcoming event" section currently displays all event reservations.  Since you now have 8 rooms you're reserving for, make sure your upcoming events section only displays events for the selected room.
- There is currently no protection against double booking the room.  The user should not be allowed to reserve the room during a time which overlaps with an existing reservation.  Make sure you show a warning message to the user, similar to what has already been implemented on the form if they haven't filled it out completely.
- The start and end time fields in the "next 5 upcoming events" section is displayed using JavaScript's built in Date objects.  Format these fields in a more easily readable format.  Feel free to use something like moment.js to assist you with this task.
- Customize the look of your application by changing .css properties.  Make at least five modifications to the .css so that you like the look of your room reservation page.  Be creative!

A signed copy of the coversheet is due beginning class on 23/24 April (WEB-6) along with any appropriate documentation of assistance.  You will submit your final code by the beginning of class to your turn-in folder (\\usmasvddeecs\eecs\Cadet\Courses\CS403\18-2\<YOUR FOLDER>).  To receive a grade on your mini-project, you will schedule a 15 minute window of time with your instructor to go over your project improvements individually.  Make sure you get your meteor project running on your laptop of on a lab machine prior to your scheduled window of time.

Again, this is an individual assignment, so make sure you cite any help you have received.
