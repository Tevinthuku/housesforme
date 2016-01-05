Template.details.rendered = function(){
    //paalax
   $('.parallax').parallax();
   
// the tabs
$('ul.tabs').tabs();

// hte tabs fixed position

$('#detailstabs').pushpin({ top: $('#detailstabs').offset().top });

}