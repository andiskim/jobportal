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

Router.route('/user', {
  name: 'user',
  template: 'UserLayout'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});
