// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.5.4_2-9gs
description: >
    Strict mode - checking access to non-strict function caller from
    strict function (New'ed Function constructor defined within strict
    mode)
negative: TypeError
flags: [onlyStrict]
---*/

var f = new Function("return gNonStrict();");
f();


function gNonStrict() {
    return gNonStrict.caller;
}
