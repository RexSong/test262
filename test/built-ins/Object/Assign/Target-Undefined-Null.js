/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is Undefined or null,Should Throw a TypeError exception.
es6id:  19.1.2.1.1
author: Wei Guo
---*/

function test(target)
{
    try
    {
        Object.assign(target,{a:1});
        $ERROR("Should throw an exception but no error was throw");
    }
    catch(e)
    {
        assert(e.name === "TypeError" , "Expected to throw a TypeError but got " + e.name + " instead");
    }
}
test(undefined);
test(null);
