/*!
 * lycos Animation Library
 * http://lycos.com/
 *
 * Copyright 2011, lycos inc
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Author: Shankar Ambady
 * Date: Wed Feb 23 2011
 */

var lycos = window.lycos || {};

(function(lycos){

var normalDiv = document.createElement('div');
	
var normalizeStyle = function(property,value){
	normalDiv.innerHTML = '<div style="'+property+':'+value+';"></div>';
	return normalDiv.childNodes[0].style[property];
};

lycos.animation = function(elementID,args){
	
	var element = document.getElementById(elementID);
	
	var options = {
		property:'width',
		animateTo:'500px',
		duration:1000,
		callback:function(){},
		easing:'linear',
		tType:'metric',
		units:''
	};
	
	for(var key in args){
		options[key] = args[key];
	}
	
	var from = element.style[options.property];
	var to = normalizeStyle(options.property,options.animateTo);

	from = normalizeStyle(options.property,from);
	options.tType = (isNaN(parseFloat(from)))?'color':'metric';
	if(options.tType !== 'color'){
		options.units = to.replace(/^[\-\d\.]+/,'');
		from = parseFloat(from) || 0;
		to = parseFloat(to) || 0;
	}
	
	options.from = from;
	options.animateTo = to;
	options.start = +new Date;
	options.finish = options.start+options.duration;
	
	
	this.options = options;
	this.element = element;
};

lycos.animation.func = {};
lycos.animation.func.interpolate = function(source,target,pos){
	return (source+(target-source)*pos).toFixed(3); 
};

lycos.animation.func.color = function(source,target,pos){
	var s = function(str, p, c){
		return str.substr(p,c||1); 
	};
    var i = 2, j, c, tmp, v = [], r = [];
    while(j=3,c=arguments[i-1],i--)
      if(s(c,0)=='r') { c = c.match(/\d+/g); while(j--) v.push(~~c[j]); } else {
        if(c.length==4) c='#'+s(c,1)+s(c,1)+s(c,2)+s(c,2)+s(c,3)+s(c,3);
        while(j--) v.push(parseInt(s(c,1+j*2,2), 16)); }
    while(j--) { tmp = ~~(v[j+3]+(v[j]-v[j+3])*pos); r.push(tmp<0?0:tmp>255?255:tmp); }
    return 'rgb('+r.join(',')+')';
};

lycos.animation.transforms = {
	linear:function(pos){
		return pos;
	},
	easeInOut:function(pos){
			return ((-Math.cos(pos*Math.PI)/2) + 0.5);
	},
	EaseIn:function(pos) {
			var state = lycos.animation.transforms.easeInOut(pos);
			return Math.pow(state, pos*2);
	},
	EaseOut:function(pos) {
			var state = lycos.animation.transforms.easeInOut(pos);
			return 1 - Math.pow(1 - pos,state*2); 
	},
	Elastic:function(pos,bounces) {
			pos = lycos.animation.transforms.easeInOut(pos);
			return ((1-Math.cos(pos * Math.PI * bounces)) * (1 - pos)) + pos; 
	},
	Bounce:function(pos,bounces) {
		return ((1-Math.cos(pos  * Math.PI * bounces)) * (1 - pos )) + pos
	}
};

lycos.animation.prototype.start = function(){
	var options = this.options,
	elem = this.element,
	ease = lycos.animation.transforms[options['easing']],
	inter = null,
	units = options['units'],
	transformFunc = (options['tType'] === 'color')?lycos.animation.func.color:lycos.animation.func.interpolate;
	inter = setInterval(function(){
				var time = +new Date;
				var pos = time>options.finish ? 1 : (time-options.start)/options.duration;
				pos = ease(pos,2); 
				var state = transformFunc(options.from,options.animateTo,pos);
				if(time>options.finish){
					clearInterval(inter);
					inter = null;
					options.callback();
				}else{
					elem.style[options.property] = state  + units;
				}
		},10);
};

window.lycos = lycos;	
})(lycos);