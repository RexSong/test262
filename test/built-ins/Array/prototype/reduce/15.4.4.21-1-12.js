// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-1-12
description: Array.prototype.reduce applied to RegExp object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof RegExp;
        }

        var obj = new RegExp();
        obj.length = 1;
        obj[0] = 1;

        return Array.prototype.reduce.call(obj, callbackfn, 1);
    }
runTestCase(testcase);
