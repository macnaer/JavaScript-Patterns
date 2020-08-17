// https://refactoring.guru/uk/design-patterns/factory-method

class Tesla {
  constructor(model, price, color, autopilot) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.autopilot = autopilot;
  }
  ShowCarInfo() {
    console.log(
      `Model: ${this.model}\nPrice: ${this.price}\nColor: ${this.color}\nAutopilot: ${this.autopilot}`
    );
  }
}

class TestlaFactory {
  create(type) {
    if (type === "X") {
      return new Tesla(type, 50000, "Blue", true);
    }
    if (type === "Y") {
      return new Tesla(type, 70000, "Red", false);
    }
  }
}

let factory = new TestlaFactory();

let X = factory.create("X");
X.ShowCarInfo();

let Y = factory.create("Y");
Y.ShowCarInfo();
