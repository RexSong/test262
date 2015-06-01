/*---
description: null and undefined source should be ignored,result should be original object.
es6id:  19.1.2.1.5.a
author: Wei Guo
---*/

var target = new Object();
var result = Object.assign(target,undefined,null);

assert(result === target , "null and undefined should be ignored, result should be original object.");

