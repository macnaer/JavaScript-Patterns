// https://refactoring.guru/uk/design-patterns/prototype

class Tesla {
  constructor(model, price, color, autopilot) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.autopilot = autopilot;
  }
  clone() {
    return new Tesla(this.model, this.price, this.color, this.autopilot);
  }
  ShowCarInfo() {
    console.log(
      `Model: ${this.model}\nPrice: ${this.price}\nColor: ${this.color}\nAutopilot: ${this.autopilot}`
    );
  }
  SetColor(color) {
    this.color = color;
  }
}

const prototype = new Tesla("X", 50000, "Red", false);

const car1 = prototype.clone();
car1.ShowCarInfo();
car1.SetColor("Brown");
car1.ShowCarInfo();

const car2 = prototype.clone();
car2.ShowCarInfo();
car2.SetColor("White");
car2.ShowCarInfo();
