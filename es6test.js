import path from "path";

class Base {
  constructor() {
    this.name = "Base";
  }
  myName() {
    console.log(`myName is ${this.name}`);
  }
}

class Sub extends Base {
  constructor() {
    super();
    this.name = "Sub";
  }
}

console.log(__dirname);
const p = path.resolve(__dirname, "/asdfasdf/dasfsadf");
console.log(p);

const instance = new Sub();

instance.myName();
