// Bug 17506: Shouldn't be able to index a class instance by a number (unless it has declared a number index signature)
var foo = (function () {
    function foo() {
    }
    return foo;
})();

var f = new foo();

f[0] = 4;// Shouldn't be allowed

