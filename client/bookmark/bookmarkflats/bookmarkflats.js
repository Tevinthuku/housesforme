// the bookmarkflats events
Template.bookmarkflats.events({
    'click .bookmark-button':  function(){
       Meteor.call('toggleBookmarkItem', this._id, this.inBookmark);
   }
});
