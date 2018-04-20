Meteor.startup(function() {
  document.title = "CS403 Room Reservations!";
});

Router.route('/', function () {
  this.render('roomSelectPage');
});

Router.route("/reservationPage", function() {
  this.render("reservationPage");
});
