// OBJECTS
// declare object by assigning brackets
const foo = {};

// assign property using dot notation
foo.bar = 'hello world';

// can assign using brackets - better for dynamic properties
const bar = 'dynamic';
foo[bar] = 'this was assigned using brackets'

// used more rarely, but can also use Object.defineProperty
Object.defineProperty(foo, 'defineProperty', {
  value: 'This was assigned using Object.defineProperty',
  writable: true,
  enumerable: true,
  configurable: true,
});

// can use inheritance
const inherited = Object.create(foo);
inherited.xee = 'This is a random new property';
console.log(inherited.bar) // 'hello world';

// CONSTRUCTORS - BASIC
function Computer(type, ram) {
  this.type = type;
  this.ram = ram;

  this.describe = function () {
    return `This is a ${this.type} with ${this.ram}MB of memory.`
  };
}

// create new instance
const macbookAir = new Computer('laptop', 1024);
console.log(macBookAir.describe()) // this is a bla bla bla

// HOWEVER,
// Attached functions (i.e. describe) are also redefined for every new instance.
// Use protoypes instead

function Computer(brand, ram) {
  this.brand = brand;
  this.ram = ram;

  this.prototype.describe = function () {
    return `This is a ${this.type} with ${this.ram}MB of memory.`
  };
}

// create new instance
const macbookAir = new Computer('laptop', 1024);
console.log(macBookAir.describe()) // this is a bla bla bla

// same deal, but now describe() lives in prototype, is not redeclared every time
