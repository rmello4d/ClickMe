(function() {
    var ClickMe = Widget.ClickMe.inherit(WAF.require('waf-behavior/studio'));
	
	// adding attributes
    ClickMe.addAttributes([{
        name: 'data-value',
        domAttribute: false
    },{
    	'name':'data-width',
    	'description':'Width',
    	'defaultValue': '100px'
    },{
    	'name':'data-height',
    	'description':'Height',
    	'defaultValue': '20px'
    }]);   
    
    
	// defining the action when user resize the widget in the Studio      
    ClickMe.on('Resize', function(event) {
    	this.studioCss('height', event.size.height);
    	this.studioCss('width', event.size.width); 
    	this.studioVal('data-width', event.size.width + 'px');
    	this.studioVal('data-height', event.size.height + 'px');	 	
	 	this.studioPanelRefresh();
    });
    

    // defining the action when widget is displayed/updated in the Studio 
	ClickMe.on('Display', function (attributes) {
		//display width and height
	 	this.studioCss('width', attributes['data-width']); 	
	 	this.studioCss('height', attributes['data-height']); 		  
	 });

	// adding the event  to the Studio Events panel
    ClickMe.addEvent({ name: 'Action' });

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html