// in JS, this pattern is trivially easy with Object.create and JS's prototypical inheritance
// here is a version without Object.create

const fooPrototype = {
  init: function (fooType) {
    this.type = fooType;
  },
  getType: function () {
    console.log('The type of this foo is... ' + fooType);
  }
}

function foo(model) {
  function mainFoo() {};
  mainFoo.prototype = fooPrototype;
  const main = new mainFoo();
  main.init(model);
  return main;
}

const f = foo('animal');
foo.getType();

// alternative implementation
const bar = (function() {
  function mainBar() {};
  return function(proto) {
    mainBar.prototype = proto;
    return new mainBar();
  }
})();
