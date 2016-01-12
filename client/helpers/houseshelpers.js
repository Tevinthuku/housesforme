Template.houses.onCreated(function(){
   var self = this;
   self.autorun(function(){
       self.subscribe('posts');
   });
});

Template.houses.helpers({
    houses: function(){
        return Posts.find({ category: "Houses" }, {sort: {postsDate:-1}});
    }
});