// the bookmarkhouses events
Template.bookmarkhouses.events({
    'click .bookmark-button':  function(){
       Meteor.call('toggleBookmarkItem', this._id, this.inBookmark);
   }
});