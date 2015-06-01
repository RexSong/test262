/*---
description: Test Object.Assign(target,...sources).
es6id:  19.1.2.1.5.c           
author: Wei Guo
---*/
 
//"a" will be an property of the final object and the value should be 1  
var target = {a:1};
/*
 "1a2c3" have own enumerable properties, so it Should be wrapped to objects;
 {b:6} is an object,should be assigned to final object.
 undefined and null should be ignored;
 125 is a number,it cannot has own enumerable properties;
 {a:"c"},{a:5} will override property a, the value should be 5.
*/
var result = Object.assign(target,"1a2c3",{a:"c"},undefined,{b:6},null,125,{a:5});

assert(Object.keys(result).length === 7 , "The length should be 7 in the final object,but actual length: " + Object.keys(result).length +" . Error Occured here!");
assert((result.a === 5 && result[0] === "1" && result[1] === "a" && result[2] === "2" && result[3] === "c" && result[4] === "3" && result.b === 6) , " The properties value should be : {a:5,\"0\":\"1\",\"1\":\"a\",\"2\":\"2\",\"3\":\"c\",\"4\":\"3\",b:6}, but we got:{a:" + result.a +",\"0\":\""+ result[0]+
       "\",\"1\":\"" + result[1]+ "\",\"2\":\"" +result[2] + "\",\"3\":\"" + result[3] + "\",\"4\":\"" + result[4] +"\",b:"+ result.b + "}instead");