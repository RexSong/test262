// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.6-14-c-1-s
description: >
    [[Enumerable]] attribute value in 'callee' is false
includes: [runTestCase.js]
---*/

function testcase() {
        var argObj = function () {
            return arguments;
        } ();

        var verifyEnumerable = false;
        for (var _10_6_14_c_1 in argObj) {
            if (argObj.hasOwnProperty(_10_6_14_c_1) && _10_6_14_c_1 === "callee") {
                verifyEnumerable = true;
            }
        }
        return !verifyEnumerable && argObj.hasOwnProperty("callee");
    }
runTestCase(testcase);
