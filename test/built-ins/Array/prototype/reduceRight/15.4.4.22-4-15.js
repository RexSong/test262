// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-4-15
description: >
    Array.prototype.reduceRight - calling with no callbackfn is the
    same as passing undefined for callbackfn
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { 10: 10 };
        var lengthAccessed = false;
        var loopAccessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                lengthAccessed = true;
                return 20;
            },
            configurable: true
        });
        Object.defineProperty(obj, "0", {
            get: function () {
                loopAccessed = true;
                return 10;
            },
            configurable: true
        });

        try {
            Array.prototype.reduceRight.call(obj, undefined);
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && lengthAccessed && !loopAccessed;
        }
    }
runTestCase(testcase);
