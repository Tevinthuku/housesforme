Template.conferences.onCreated(function(){
   var self = this;
   self.autorun(function(){
       self.subscribe('posts');
   });
});

Template.conferences.helpers({
    conference: function(){
        return Posts.find({ category: "Conferences" }, {sort: {postsDate:-1}});
    }
});