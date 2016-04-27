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
