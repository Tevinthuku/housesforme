 //login redirects
 if(Meteor.isClient){
           //on login
    Accounts.onLogin(function(){
        Router.go('main');
    });
    
    //on logout
    Accounts.onLogout(function(){
        Router.go('intro');
    });
    
}


Router.route('/',{
    name: "main",
    template:"main"
});

// add -> the category section

Router.route('/addcategory');

/// add category details
Router.route('/addingdetails');



// bookmark route
Router.route('/bookmark');

// settings route
Router.route('/settings');

// details route
Router.route('/details');

// notes route
Router.route('/notes');

// intro route
Router.route('/intro');

// login route
Router.route('/login');


// layout
Router.configure({
    layoutTemplate: 'layout'
});