(function() {
	
	var widget = WAF.require('waf-core/widget');
 
	//creating the widget
 	var ClickMe = widget.create('ClickMe');
 
 	// adding a dom property to the widget
 	ClickMe.addDomHtmlProperty('value', { default_value: 'Click me, please!'});
 
 	//associating the dom event click to the wakanda Event.Action class (you can associate many dom events to the same wakanda event
 	ClickMe.autoFireDomEvent('click', Event.Action);


})();