/*---
description: Test override of Object.Assign(target,...sources),
             Every string from sources will be wrapped to objects, and override from the first letter(result[0]) all the time
es6id:  19.1.2.1
author: Wei Guo
---*/

var target = 12;
var result = Object.assign(target,"aaa","bb2b","1c");

assert(Object.keys(result).length === 4 , "The length should be 4 in the final object,but actual length: " + Object.keys(result).length +" .");
assert((result[0] === "1" && result[1] === "c" && result[2]==="2" && result[3] === "b") , "Every string form sources will be wrapped to objects, and override from the first letter(result[0]), so the value should be{\"0\":\"1\",\"1\":\"c\",\"2\":\"2\",\"3\":\"b\"}, but we got:{\"0\":\""+ result[0]+
          "\",\"1\":\"" + result[1]+ "\",\"2\":\"" +result[2] + "\",\"3\":\"" + result[3] + "}instead");