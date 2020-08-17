// https://refactoring.guru/uk/design-patterns/singleton

class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }

    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count++;
  }
}

let obj1 = new Counter();
console.log("obj1", obj1.getCount());
obj1.increaseCount();
obj1.increaseCount();
obj1.increaseCount();
console.log("obj1", obj1.getCount());
// let obj2 = obj1;
let obj2 = new Counter();
console.log("obj2", obj2.getCount());
