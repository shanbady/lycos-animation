lycos-animation
===============

A small and simple javascript animation library I created when I worked at lycos


- See demo.html for examples

## Usage

```js

/*

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


var cb = function(){
	alert('callback called after animation finished');
	return false;
};

var letteranimation = new lycos.animation('letterspacing',{'property':'letter-spacing','animateTo':'7px','duration':1000,'easing':'Elastic','callback':cb});

letteranimation.start();

```
