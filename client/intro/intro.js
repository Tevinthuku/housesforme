Template.intro.rendered = function(){
    // full page
    			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				sectionsColor: ['#ffffff', '#ffffff ', '#ffffff '],
				navigation: true,
				navigationPosition: 'right',
				slidesNavigation: true,
				navigationTooltips: ['First', 'Second', 'Third']
			});
}