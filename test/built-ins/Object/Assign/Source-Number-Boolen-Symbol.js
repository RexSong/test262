/*--
description: Number,Boolean,Symbol cannot have own enumerable properties,
			 So cannot be Assigned.Here result should be original object.
es6id:  19.1.2.1.5.c
author: Wei Guo
--*/
 
var target = new Object();
var result = Object.assign(target,123,true,Symbol('foo'));

assert(result === target,"Numbers, booleans, and symbols cannot have wrappers with own enumerable properties.");
