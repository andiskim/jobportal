// Event for register form
Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var username = $('[name=username]').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      username: username,
      email: email,
      password: password
      // profile: {
      //   firstName: firstName;
      //   lastName: lastName;
      // }
    }
    , function(error) {
      if(error) {
        console.log(error.reason)
      } else {
          Router.go("home");
      }
    });
    Router.go('home');
  }
});

//Login events
Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password,
      function(error) {
      if(error) {
        console.log(error.reason);
      } else {
        var currentRoute = Router.current().route.getName();
        console.log(currentRoute);
        if(currentRoute == "login") {
          Router.go("home");
        }
      }
    });
  }
});

Template.navbar.events({
  'click .logout': function() {
    Meteor.logout();
  }
});

Template.UserLayout.helpers({
  'run': function() {
    // console.log(Meteor.user().username);
  }
});
