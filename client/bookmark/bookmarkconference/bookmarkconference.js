// the bookmarkconference events
Template.bookmarkconference.events({
    'click .bookmark-button':  function(){
       Meteor.call('toggleBookmarkItem', this._id, this.inBookmark);
   }
});