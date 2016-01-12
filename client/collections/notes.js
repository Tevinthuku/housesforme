Notes = new Mongo.Collection('notes');
// the allow and deny

Notes.allow({
    insert: function(userId, doc){
        return !!userId;
    },
});


// array of characteristics
NotesCharacteristics = new SimpleSchema({
    name: {
        type: String,
        
        autoform: {
            icon: "create",

        },
    }
});

// the schema
NoteSchema = new SimpleSchema({
    header: {
        type: String,
        autoform: {
            icon: "pets",
        },
    },
    description: {
        type: String,
        autoform: {
            icon: "description",
            type: 'textarea'
            
        },
    },
    
    
    characteristics: {
        type: [NotesCharacteristics]
    },
    
    userIntel: {
        type: String,
        label: "Type your Name",
        autoform: {
            class: "disabled"
        }
    },
    notesDate: {
        type: Date,
        label: "Publication Date"
    }
});

var postHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.userIntel = Meteor.userId();
      }
      
      return doc;
    }
  }
}

var postHooksForDate = {
    before: {
        insert: function(doc) {
            if(Meteor.userId()){
                doc.notesDate = new Date;
            }
            return doc
        }
    }
}

AutoForm.addHooks('quickstring',postHooks );
AutoForm.addHooks('quickstring',postHooks );

Notes.attachSchema( NoteSchema );