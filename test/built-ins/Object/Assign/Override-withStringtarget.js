/*---
description: Test override of Object.Assign(target,...sources),
             Every string from sources will be wrapped to objects, and override from the first letter(result[0]) all the time.
es6id:  19.1.2.1
author: Wei Guo
---*/

var target = "ddd";
var result = Object.assign(target,"aaa","bb2b","1c");

assert(Object.getOwnPropertyNames(result).length === 8 , "The length should be 8 in the final object,but actual length: " + Object.getOwnPropertyNames(result).length +" .");
assert((Object.getOwnPropertyDescriptor(result,[0]).value === "1" && Object.getOwnPropertyDescriptor(result,[1]).value === "c" && Object.getOwnPropertyDescriptor(result,[2]).value === "2" && Object.getOwnPropertyDescriptor(result,[3]).value === "b") , "Every string form sources will be wrapped to objects, and override from the first letter(result[0]), so the value should be{\"0\":\"1\", \"1\":\"c\", \"2\":\"2\", \"3\":\"b\"}, but we got:{\"0\":\""+ Object.getOwnPropertyDescriptor(result,[0]).value +
          "\", \"1\":\"" + Object.getOwnPropertyDescriptor(result,[1]).value + "\", \"2\":\"" + Object.getOwnPropertyDescriptor(result,[2]).value + "\", \"3\":\"" + Object.getOwnPropertyDescriptor(result,[3]).value + "}instead");