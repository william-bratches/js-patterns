// restrict object instation to single point of access
// tightly control object creation
const singleton = (function () {

  // will store the reference that tells of if we've already initialized or not
  let instance;

  function init() {
    const private = 'Hello. I am private.';
    const privateNumber = 123;
    return {
      publicMethod: function () {
        'Hello world.'
      },
    }
  }

  return {
    getInstance: function () {
      // no dupes, under control
      if (_.isUndefined(instance)) {
        instance = init();
      }
      return instance;
    }
  }
})();

// usage
myModule = singleton.getInstance();

// HOWEVER...
// if you are using singletons too much, you may be coupling too tightly with too many
// dependencies. Using dependency injection instead
