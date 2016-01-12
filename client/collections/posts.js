Posts = new Mongo.Collection('posts');
// the allow and deny



Posts.allow({
    insert: function(userId, doc){
        return !!userId;
    },update: function(userId, doc){
        return !!userId;
    }
    
});
// time schema
TimeSchema = new SimpleSchema({
    date: {
        type: Date,
        autoform: {
          type:"pickadate",
        },
    },
    timestart: {
        type: String,
        autoform: {
            class: "input_starttime",
        },
    },
    timeend: {
        type: String,
        autoform: {
            class: "input_starttime",
        },
    },
});
// main schema
PostSchema = new SimpleSchema({
    title: {
        type: String,
        
        autoform: {
            icon: "create",
        },
    },
    category: {
    type: String,
    label: "Category",
    allowedValues: ['Houses', 'Apartments', 'Offices','Conferences'],
    autoform: {
      options: [
        {label: "Houses", value: "Houses"},
        {label: "Apartments", value: "Apartments"},
        {label: "Offices", value: "Offices"},
        {label: "Conferences", value: "Conferences"}
      ]
    }
  },
  
    picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                
            }
        }
    },
    inBookmark: {
        type: Boolean,
        defaultValue: false,
        optional: true,
    },
    timeready: {
        type: [TimeSchema]
    },
        
    userIntel: {
        type: String,
        label: "Type your Name",
        autoform: {
            class: "disabled"
        }
    },
    
    
    postsDate: {
        type: Date,
        label: "Publication Date"
    }
    
    
});

var bookmarker = {
    before: {
        insert: function(doc) {
            if(Meteor.userId()){
                doc.inBookmark = false;
            }
            
            return doc;
        }
    }
}
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
                doc.postsDate = new Date;
            }
            return doc
        }
    }
}



AutoForm.addHooks('add-details-form',bookmarker );
AutoForm.addHooks('add-details-form',postHooks );
AutoForm.addHooks('add-details-form',postHooksForDate );

Posts.attachSchema( PostSchema );