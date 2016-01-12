Template.flats.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

Template.flats.helpers({
    flats: function(){
        return Posts.find({ category: "Apartments" }, {sort: {postsDate:-1}});
    }
})