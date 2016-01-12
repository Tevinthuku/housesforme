//notes section
Template.notes.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('notes');
  });
});

Template.notes.helpers({
  notesshow: function(){
    return Notes.find({}, {sort: {notesDate:-1}});
  }
});