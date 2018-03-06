let p = console.log;

p(0.1+0.2)
p(0.1+0.2 == 0.3);

p(Number("K")); // NaN
p(typeof NaN); // number
p(typeof new Number("123"))  // object

p((5.6879).toPrecision(3))
p((5.6879).toFixed(3))

p("==========")
p(isFinite(NaN))
p(isFinite(Infinity))
p(isFinite(Number.POSITIVE_INFINITY))
p(isNaN({}))
p(isNaN(Number.POSITIVE_INFINITY))