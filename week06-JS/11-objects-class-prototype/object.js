const obj1 = {
  fname: "John",
  lname: "Doe",
  getFullName() {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Jane",
  lname: "Smith",
};

obj2.__proto__ = obj1;

console.log(obj1.getFullName());
console.log(obj2.getFullName());
