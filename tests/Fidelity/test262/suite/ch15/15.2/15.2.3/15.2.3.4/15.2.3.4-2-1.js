/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.4/15.2.3.4-2-1.js
 * @description Object.getOwnPropertyNames - returned array is an array according to Array.isArray
 */


function testcase() {

        var obj = {};
        var result = Object.getOwnPropertyNames(obj);

        return Array.isArray(result);
    }
runTestCase(testcase);
