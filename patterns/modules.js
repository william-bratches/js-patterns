// Object literal module
// Pretty much just attaching values/functions as propertis of an object
const objLiteralModule = {
  description: 'H.P.U -- Human Productive Unit',
  config: {
    language: 'English',
    class: 'Engineer',
  }
  describe: function () {
    console.log(this.description);
  },
  updateConfig: function (newConfig) {
    this.config = _.extend(config, newConfig);
  }
}

// usage
objLiteralModule.describe() // H.P.U - Huamn Productive Unit
objLiteralModule.updateConfig({ eyeColor: 'blue' });

// the classique module pattern
// one of my favorites, popularized by douglas crockford and ilk
const myModule = (function () {
  const counter = 0;
  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      counter = 0;
    }
  }
})();

// usage
console.log(myModule.incrementCounter()) // 1
console.log(myModule.resetCounter()) // 0


// can also have private methods, control exposure
const myModuleWithPrivates = (function () {
  const private = 'This is private.';
  const privateMethod = function (name) {
    `${name} is super secret.`;
  }
  // public
  return {
    description: 'This module uses some private stuff.',
    foo: function (name) {
      console.log(privateMethod(name));
    }
  }
})();


// REVEALING MODULE pattern
// nearly same thing, but declare everything first them return the kitchen sink
// with privates pruned out of it
// easier to work with when you need to swap privates to make them
// public or vice versa
const revealingModule = (function() {
  const private = 'This is private.';
  const privateMethod = function (name) {
    `${name} is super secret.`;
  };
  const foo = function (name) {
    console.log(privateMethod(name));
  };

  // with es6 we can just type the name of what we want to return in
  // i love it
  return {
    foo,
  }
})();
