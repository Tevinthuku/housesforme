Template.main.rendered = function(){
    
      // the side nav
      $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true
    }
  );
  // the search bar
  $('.button-search').sideNav({
      menuWidth:300,// set 90%
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true
    }
  );
  
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
 
 
 
  // the tabs
$('ul.tabs').tabs();

//tabs fixed position

  // Cache selectors for faster performance.
    var $window = $(window),
        $mainMenuBar = $('.stickermaintabs'),
        $mainMenuBarAnchor = $('#mainMenuBarAnchor');

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $mainMenuBar.addClass('stick');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        }
        else {
            // Unstick the div.
            $mainMenuBar.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    });
    
    // the dropdown config
    
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
    
}


Template.main.events({

});