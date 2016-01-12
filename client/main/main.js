Template.main.rendered = function(){
    // the email address
    var myMail = Meteor.user().emails[0].address;
    
    //dispaying the email
    document.getElementById("myMail").innerHTML = myMail;
    
      // the side nav
      $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true
    }
  );
  // the dropdown
  $('.collapsible').collapsible();
  
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
 
// the svg d3 data plugster
 // the svg in fixed position
 								var n = 20, // number of layers
							    m = 200, // number of samples per layer
							    stack = d3.layout.stack().offset("wiggle"),
							    layers0 = stack(d3.range(n).map(function() { return bumpLayer(m); })),
							    layers1 = stack(d3.range(n).map(function() { return bumpLayer(m); }));

								var width = 300,
								    height = 100;

								var x = d3.scale.linear()
								    .domain([0, m - 1])
								    .range([0, width]);

								var y = d3.scale.linear()
								    .domain([0, d3.max(layers0.concat(layers1), function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
								    .range([height, 0]);

								var color = d3.scale.linear()
								    .range(["#aad", "#5538"]);

								var area = d3.svg.area()
								    .x(function(d) { return x(d.x); })
								    .y0(function(d) { return y(d.y0); })
								    .y1(function(d) { return y(d.y0 + d.y); });

								var svg = d3.select(".sideheadericons").append("svg")
								    .attr("width", width)
								    .attr("height", height);

								svg.selectAll("path")
								    .data(layers0)
								  .enter().append("path")
								    .attr("d", area)
								    .style("fill", function() { return color(Math.random()); });

								function transition() {
								  d3.selectAll("path")
								      .data(function() {
								        var d = layers1;
								        layers1 = layers0;
								        return layers0 = d;
								      })
								    .transition()
								      .duration(2500)
								      .attr("d", area);
								}

								// Inspired by Lee Byron's test data generator.
								function bumpLayer(n) {

								  function bump(a) {
								    var x = 1 / (.1 + Math.random()),
								        y = 2 * Math.random() - .5,
								        z = 10 / (.1 + Math.random());
								    for (var i = 0; i < n; i++) {
								      var w = (i / n - y) * z;
								      a[i] += x * Math.exp(-w * w);
								    }
								  }

								  var a = [], i;
								  for (i = 0; i < n; ++i) a[i] = 0;
								  for (i = 0; i < 5; ++i) bump(a);
								  return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
								}
 
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


Template.main.helpers({
  specificFormData: function() {
    return {
      id: this._id,
      other: this.other,
      hard: 'Lolcats'
    }
  }
});