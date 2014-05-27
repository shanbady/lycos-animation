/*!
 * lycos FX library. 
 * Depends on the lyos animation library
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

var effects = {
	'fadeIn':[{'property':'opacity','animateTo':'1','duration':1500,'easing':'linear'}],
	'fadeOut':[{'property':'opacity','animateTo':'0','duration':1500,'easing':'linear'}],
	'flip':[],
	'slideUp':[],
	'slideDown':[]
}

lycos.fx = function(elementID,args){
	
	var element = document.getElementById(elementID);
	var effect = args['effect'];
	
	
}; 

window.lycos = lycos;	
})(lycos);