Template.notes.rendered = function(){
    // pick a time
        $('.input_endtime').clockpicker({
      placement: 'bottom',
      align: 'left',
      darktheme: true,
      twelvehour: false
    });
    
    // modal
     $('.modal-trigger').leanModal();
     
     // the tabs
      $('ul.tabs').tabs();
      
      // the nav goes
    $('.notestabs').pushpin({ top: $('.notestabs').offset().top });
      
      
  // tab swipe
  
  // tab for houses swipe left swipe left
  $("#notescreateauto").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function() {
            
           $('ul.tabs').tabs('select_tab', 'test2');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
      
    // tab for houses swipe left swipe right
  $("#notesstore").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function() {
            
           $('ul.tabs').tabs('select_tab', 'test1');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
  
};

Template.notes.events({
    'click .notessubmit': function(){
        $('ul.tabs').tabs('select_tab', 'test2');
    }
});