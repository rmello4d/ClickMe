(function(ClickMe) {
	
	// adding attributes
    ClickMe.addAttributes([{
        name: 'data-value',
        domAttribute: false
    }]);   
    
   		
	/*Default positioning*/
    ClickMe.setWidth('200');
    ClickMe.setHeight('20');

	// adding the event  to the Studio Events panel
    ClickMe.addEvent({ name: 'Action' });

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.htmler resize the widget in the Studio      
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