// bicle.js
import { Vehicle } from "./vehicle.js";
class Bicycle extends Vehicle {
  constructor() {
    super();
    this.numberOfWheels = 2;
    this.horn = "Honk Honk";
  }
}

export { Bicycle };
