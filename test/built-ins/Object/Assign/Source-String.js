/*---
description: Test Object.Assign(target,...sources), string have own enumerable properties, so it can be wrapped to objects.
es6id:  19.1.2.1.5.c
author: Wei Guo
---*/

var target = new Object();
var result = Object.assign(target,"123");

assert((result[0] === "1" && result[1] === "2" && result[2] === "3") , "String have own enumerable properties, so it should be wrapped to objects.");