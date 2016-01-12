Notes = new Mongo.Collection('notes');

Meteor.publish('notes', function(){
    return Notes.find({userIntel : this.userId});
});
