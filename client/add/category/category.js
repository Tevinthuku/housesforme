Template.addcategory.rendered = function(){


  // the tabs
$('ul.tabs').tabs();

//fixed tab
 $('#categorytabs').pushpin({ top: $('#categorytabs').offset().top });
 
 // the modal
  $('.modal-trigger').leanModal();
  
//Enable swiping in first category tab...
      $("#categoryone").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function() {
            
           $('ul.tabs').tabs('select_tab', 'test2');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
// nable swiping in second category tab...
      $("#categorytwo").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function() {
           $('ul.tabs').tabs('select_tab', 'test1');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });


}



//template events
Template.addcategory.events({
    'click .addcategorytomain': function(){
        Router.go('main');
    }
});