Notes = new Meteor.Collection('notes');
// the allow and deny

Notes.allow({
    insert:function(userId,doc){
        return !! userId;
    }
});

// the schema
NoteSchema = new SimpleSchema({
    Header: {
        type: String,
        autoform: {
            icon: "pets",
        },
    },
    Description: {
        type: String,
        autoform: {
            icon: "description",
            type: 'textarea'
            
        },
    },
    author: {
        type: String,
        label: "Author",
        autoValue : function(){
            return this.userId
        },
        autoform: {type: "hidden"}
    },
    createdAt: {
        type: Date,
        label : "Created At",
        autoValue : function(){
            return new Date()
        },
        autoform: {type: "hidden"}
    }
});

Notes.attachSchema(NoteSchema);