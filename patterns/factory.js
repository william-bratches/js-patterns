 // vehicle class
 function Car(options) {
   this.doors = options.doors || 4;
   this.state = options.state || 'brand new';
   this.color = options.color || 'silver';
 }

 // a constructor for defining new trucks
 function Truck(options) {
   this.state = options.state || 'used';
   this.wheelSize = options.wheelSize || 'large';
   this.color = options.color || 'blue';
 }

// vehicle factory
function VehicleFactory(){};

// default class is Car
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function (options) {
  switch(options.vehicleType) {
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'truck':
      this.vehicleClass = Truck;
      break;
  }

  return new this.vehicleClass(options);
}

const carFactory = newVehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6,
});

// in my opinion, this implemention is OK....but could be better. the switch statement is a bit unwieldy,
// and it tries to hard to be java here.
