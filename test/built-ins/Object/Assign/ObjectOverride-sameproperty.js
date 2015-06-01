/*--
description: Object properties are assigned to target in ascending index order,
			 i.e. a later assignment to the same property overrides an earlier assignment.
es6id:  19.1.2.1
author: Wei Guo
--*/
var target = {a: 1};
var result = Object.assign(target,{a:2},{a:"c"});

assert(result.a === "c" , "Object.assign() will override the property with the last value of this property in the arguments, so the value should be 'c'. But we got a \'" +result.a 
	+ "\' instead." );