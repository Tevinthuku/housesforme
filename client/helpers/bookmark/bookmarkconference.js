// the conference on created
Template.bookmarkconference.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

// the bookmark conference helper

Template.bookmarkconference.helpers({
    flats: function(){
        return Posts.find({ category: "Conferences", inBookmark: true }, {sort: {postsDate:-1}});
    }
});