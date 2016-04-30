Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// Router.route('/register');
// Router.route('/login');
// Router.route('/home');

Router.route('/', {
  name: 'home',
  template: 'HomeLayout'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});

Router.route('LoginLayout');

Router.route('/user/:_id', {
  name: 'user',
  template: 'UserLayout',
  data: function() {
    var currentUser = this.params._id;
    var meteorId = Meteor.userId();
    console.log(currentUser);
    console.log(meteorId);
    if(currentUser === meteorId) {
      console.log("Fill in this page with user information dynamically");
    }
  }
});
