WAF.define('ClickMe', function() {
	
	var widget = WAF.require('waf-core/widget');
 
	//creating the widget
 	var ClickMe = widget.create('ClickMe');
 
 	// adding a dom property to the widget, this will also create a bindable attribute
 	ClickMe.addDomHtmlProperty('value');
 
 
 	//OPTION 1
 	// 
 	// Use the autoFireEvent to associate the dom event 'click' to the wakanda Action event string (you can also associate many dom events to the same wakanda event if needed)
 	// In this case, I am not sending any particular data to the event. 
 	 	
 	ClickMe.autoFireDomEvent('click', "Action");
 
 
 	ClickMe.prototype.init = function() {
 		
    	// adding a general class to the widget, just to be visually interesting
        this.addClass('waf-skin-box');   
        
                 
	}
	
 
 	
 	/* OPTION 2
 	// 
 	// Use JQuery 'click'  +   fire(Event)
	// In this case I am customising the data sent by the fire(Event)
	
	ClickMe.prototype.init = function() {
    
    	// adding a general class to the widget
        this.addClass('waf-skin-box');
              
        //creating an internal event that will change the color of the content to yellow       
 		$(this.node).on('click', function() {
			this.fire(new Event.Action({
                value: 'I was clicked !'
            }));
		}.bind(this));
	}
	
	*/
	
	return ClickMe;
 
});