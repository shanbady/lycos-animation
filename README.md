lycos-animation
===============

A small and simple javascript animation library I created when I worked at lycos


- See demo.html for examples

## Usage

```js

/*

	var cb = function(){
		alert('callback called after animation finished');
		return false;
	};

	var animation = new lycos.animation('<animation name>',{
		'property':'<css property to animation>',
		'animateTo':'n<px,ems,pt,%>',
		'duration':<duration in ms>,
		'easing':'<easing type>',
		'callback':function(){
			consolel.log('animation complete!');
		}
	});

	animation.start();
*/


var letters = new lycos.animation('letterspacing',{'property':'letter-spacing','animateTo':'7px','duration':1000,'easing':'Elastic','callback':cb});

letters.start();

```
