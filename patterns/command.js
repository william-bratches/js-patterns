(function(){
  const compManager = {
    requestInfo: function (model, id) {
      return `The information for ${model} with ID ${id} is foobar`;
    },
    buyComputer: function (model, id) {
      return 'Congrats! you have bought a computer.';
    },
    bookRental: function (model, id) {
      `You have booked a rental of ${model}`;
    },
    execute: function (name) {
      return compManager[name] && compManager[name].apply(compManager, [[].slice.call(arguments, 1)]);
    }
  }
})();
