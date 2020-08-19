// https://refactoring.guru/uk/design-patterns/decorator

class Car {
  constructor() {
    this.color = "White";
    this.price = 10000;
    this.model = "Unknown";
  }

  getPrice() {
    return this.price;
  }

  getModel() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 30000;
    this.model = "Tesla Model X";
  }
}

class Ferrari extends Car {
  constructor() {
    super();
    this.price = 80000;
    this.model = "Ferrari Berlinetta";
  }
}

class AutoPilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    console.log("Autopilot added");
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getModel()} + autopilot`;
  }
}

let tesla = new Tesla();
console.log(tesla.getPrice());
tesla = new AutoPilot(tesla);
console.log(tesla.getPrice());
console.log(tesla.getDescription());

let ferrari = new Ferrari();
console.log(ferrari.getModel());
console.log(ferrari.getPrice());
ferrari = new AutoPilot(ferrari);
console.log(ferrari.getDescription());
console.log(ferrari.getPrice());
