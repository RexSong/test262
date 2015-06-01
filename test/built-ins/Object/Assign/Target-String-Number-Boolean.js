/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is String,Number,Boolean,the return value should be a new object whose value is target.			 
es6id:  19.1.2.1.1
author: Yanli Xu
---*/

function test(target)
{
    var result = Object.assign(target,{a:1});
    assert((typeof result === "object" && result.valueOf() === target) , "Return value should be an object whose value is: " + target + ", but a "+ typeof result 
        + " whose value is: " +result.valueOf() + ", instead." ); 
}

test("test");
test(1);
test(true); 