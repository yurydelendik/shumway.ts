var c;
(function (c) {
    
    c.x;
    c.x.foo();
})(c || (c = {}));

////[internalAliasUninitializedModule.d.ts]
declare module a.b {
    interface I {
        foo(): any;
    }
}
declare module c {
    var x: a.b.I;
}
