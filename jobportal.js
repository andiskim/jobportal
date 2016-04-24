Jobs = new Mongo.Collection('jobs');

if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.slider.rendered = function() {
    $(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
})
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
