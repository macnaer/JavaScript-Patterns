// https://refactoring.guru/uk/design-patterns/builder

class Car {
  constructor() {
    this.color = "white";
    this.audioSystem = false;
    this.autoPilot = false;
    this.model = "Unknown";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addColor(color) {
    this.car.color = color;
    return this;
  }
  addAudioSystem(audio) {
    this.car.audioSystem = audio;
    return this;
  }
  addAutopilot(autopilot) {
    this.car.autoPilot = autopilot;
    return this;
  }

  addModel(model) {
    this.car.model = model;
    return model;
  }
  ShowCarInfo() {
    console.log(
      `Model: ${this.car.model}\nColor: ${this.car.color}\nAudio: ${this.car.audioSystem}\nAutopilot: ${this.car.autoPilot}`
    );
  }

  build() {
    return this.car;
  }
}

let car = new CarBuilder();
car.ShowCarInfo();
car.addAudioSystem("Samsung");
car.addColor("Red");
car.addModel("Tesla Model Y");
car.addAutopilot("Stage 4");
car.build();
car.ShowCarInfo();
console.log(car);
