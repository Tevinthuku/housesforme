Template.bookmarkflats.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

Template.bookmarkflats.helpers({
    flats: function(){
        return Posts.find({ category: "Apartments", inBookmark: true }, {sort: {postsDate:-1}});
    }
});