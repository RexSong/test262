/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is Object,its properties will be the properties of new object. 
es6id:  19.1.2.1.1
author: Yanli Xu
---*/

var target = {foo: 1};
var result = Object.assign(target,{a:2});

assert((result.foo === 1 && result.a === 2) , "Return value should be an object whose value is { foo: 1, a: 2 }, but the result.foo value is " +result.foo 
	+ " and the result.a value is " +result.a + " instead." );
  
   
