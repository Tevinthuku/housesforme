Meteor.methods({
    toggleBookmarkItem: function(id, currentState){
        Posts.update(id, {
            $set: {
                inBookmark: !currentState
            }
        });
    }
});