/*---
description: test Object.Assign(target,...sources),only one argument was passed,
             return ToObject(target)
es6id:  19.1.2.1.3			 
author: Wei Guo
---*/

var target = "a";
var result = Object.assign(target);

assert(result.valueOf() === "a" , "Should return 'a',but \'"+ result.valueOf() + "\' instead.");