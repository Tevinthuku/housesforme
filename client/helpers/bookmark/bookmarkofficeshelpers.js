Template.bookmarkoffices.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

Template.bookmarkoffices.helpers({
    flats: function(){
        return Posts.find({ category: "Offices", inBookmark: true }, {sort: {postsDate:-1}});
    }
});