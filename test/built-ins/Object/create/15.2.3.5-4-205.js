// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-205
description: >
    Object.create - 'writable' property of one property in
    'Properties' is null (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
    prop: {
        writable: null
    }
});

assert(newObj.hasOwnProperty("prop"));
assert.sameValue(typeof newObj.prop, "undefined");
verifyNotWritable(newObj, "prop");
