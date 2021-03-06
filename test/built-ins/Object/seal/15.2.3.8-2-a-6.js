// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-a-6
description: >
    Object.seal - 'P' is own accessor property that overrides an
    inherited accessor property
includes: [propertyHelper.js]
---*/

var proto = {};

Object.defineProperty(proto, "foo", {
    get: function () {
        return 0;
    },
    configurable: true
});

var ConstructFun = function () { };
ConstructFun.prototype = proto;

var obj = new ConstructFun();

Object.defineProperty(obj, "foo", {
    get: function () {
        return 10;
    },
    configurable: true
});

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyNotConfigurable(obj, "foo");
assert.sameValue(obj.foo, 10);
