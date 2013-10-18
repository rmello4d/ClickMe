## Custom Widget for [Wakanda](http://wakanda.org)
The __ClickMe__ widget is an example of how to use the widget's Events in Wakanda. 

### Properties
This widget has the following properties: 

* __value__: The value of the widget
* __width__: The width of the widget
* __height__: The height of your widget

### Goals
The __ClickMe__ is an example of the Event class. 


### widget.js

We are adding a dom property to the basic widget :

	// adding a dom property to the widget
 	ClickMe.addDomHtmlProperty('value', { default_value: 'Click me, please!'});

Then we associate the Event.Action with the dom event click 

 	//associating the dom event click to the wakanda Event.Action class (you can associate many dom events to the same wakanda event
 	ClickMe.autoFireDomEvent('click', Event.Action);


### designer.js
	
	// adding the attribute value to the widget 
    ClickMe.addAttributes([{
        name: 'data-value',

	// adding the event Action to the Studio Events panel
    ClickMe.addEvent({ name: 'Action' });


### Wakanda Studio

1. Drag the widget to your Wakanda page. 
2. Edit the Action event in the Studio Events Panel

```
	// in your WAF.onAfterInit :
	
	clickMe1.Action = function clickMe1_Action (event)
	{
		alert('I was clicked');
	};
```


### CSS
The __ClickMe__ CSS will define all the 2 areas:  left and right 
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

