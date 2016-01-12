// my posts
Meteor.publish('uploads', function(){
    return Posts.find({userIntel : this.userId});
});