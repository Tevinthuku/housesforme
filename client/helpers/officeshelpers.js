Template.offices.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

Template.offices.helpers({
    offices: function(){
        return Posts.find({ category: "Offices" }, {sort: {postsDate:-1}});
    }
});