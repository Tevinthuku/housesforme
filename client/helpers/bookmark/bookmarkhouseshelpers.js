// the bookmarkhouses on created
Template.bookmarkhouses.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

// the bookmarkhouses conference helper

Template.bookmarkhouses.helpers({
    flats: function(){
        return Posts.find({ category: "Houses", inBookmark: true }, {sort: {postsDate:-1}});
    }
});
