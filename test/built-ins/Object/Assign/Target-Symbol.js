/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is Symbol,the return value should be a new Symbol object whose [[SymbolData]] value is target.		 
es6id:  19.1.2.1.1
author: Yanli Xu
---*/

var target = Symbol('foo');
var result = Object.assign(target,{a:1});

assert((typeof result === "object" && result.toString() === "Symbol(foo)") , "Return value should be a symbol object whose value is 'Symbol(foo)', but a \'"+ typeof result 
    + "\' whose value is \'" +result.toString()+ "\' instead." );