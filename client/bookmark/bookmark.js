Template.bookmark.rendered = function(){

// modal 
$('.modal-trigger').leanModal();


$('#bookmarktabs').pushpin({ top: $('#bookmarktabs').offset().top });

// the tabs
$('ul.tabs').tabs();

  // tab swipe
  
  // tab for houses swipe left
  $("#houses").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function() {
            
           $('ul.tabs').tabs('select_tab', 'test2');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
      
 // tab for flats swipe right
 $("#flats").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function() {
            
           $('ul.tabs').tabs('select_tab', 'test1');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
      
 // tab for flats swipe left
 $("#flats").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function() {
            
           $('ul.tabs').tabs('select_tab', 'test3');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });  
      
 // tab for offices swipe right
 $("#offices").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function() {
            
           $('ul.tabs').tabs('select_tab', 'test2');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
      
 
      
 // tab for offices swipe left
 $("#offices").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function() {
            
           $('ul.tabs').tabs('select_tab', 'test4');
           
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:70
      });
      
 // tab for confeence swipe right
  $("#conf").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function() {
            
           $('ul.tabs').tabs('select_tab', 'test3');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
 
 
}

//template events
Template.bookmark.events({
    'click .bookmarktohome': function(){
        Router.go('main');
    }
});