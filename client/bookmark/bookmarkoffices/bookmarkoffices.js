// the bookmarkoffices events
Template.bookmarkoffices.events({
    'click .bookmark-button':  function(){
       Meteor.call('toggleBookmarkItem', this._id, this.inBookmark);
   }
});