Template.myuploads.onCreated(function(){
   var self = this;
   self.autorun(function(){
       self.subscribe('uploads');
   });
});

Template.myuploads.helpers({
    upload: function(){
        return Posts.find({}, {sort: {postsDate:-1}});
    }
});
