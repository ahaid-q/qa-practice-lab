//Task #1

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

const err = new NotFoundError("Not found");
console.log(err.name);
console.log(err.message);

//Task #2

function getUser(id) {
  const users = { 1: "Vika", 2: "Katia" };

  if (!users[id]) {
    throw new NotFoundError("User not found");
  }

  return users[id];
}

console.log(getUser(1));

//Task #3
try {
  getUser(10);
} catch (e) {
  if (e instanceof NotFoundError) {
    console.log("NotFoundError:", e.message);
  } else {
    console.log("Other error");
  }
}

//Task #4

const p = new Promise((resolve) => {
  setTimeout(() => resolve("OK"), 1000);
});

p.then((res) => console.log(res));

//Task #5

async function run() {
  const res = await new Promise((resolve) =>
    setTimeout(() => resolve("OK"), 1000)
  );
  console.log(res);
}
run();

//Task #6

async function test() {
  throw new Error("Async error");
}

test().catch(e => console.log(e.message));

//Task #8

import { isEven } from "./utils.mjs";
console.log(isEven(7));

//Task #9

import { isEven as checkEven } from "./utils.mjs";

console.log(checkEven(5));

//Task #10

function vacation(month) {
  if (month === "July" || month === "August") {
    return "approved";
  }
  return "denied";
}

console.log(vacation("July"));
console.log(vacation("September"));

//Task #11

function ticket(price, age, isStudent) {
  if (age < 2) return 0;
  if (age < 10) return price * 0.5;
  if (age > 65) return price * 0.85;
  if (isStudent) return price * 0.9;
  return price;
}

console.log(ticket(100, 1));
console.log(ticket(100, 7));
console.log(ticket(100, 66));
console.log(ticket(100, 20, true));

//Task #12

const arr = [[1,2],[3,4,5],[6,7,8],9,[10],[0,11],"Hello"];

const sum = arr.flat(Infinity)
  .filter(x => typeof x === "number")
  .reduce((a,b) => a + b, 0);

console.log(sum);

//Task #13

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

//Task #14

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Vika");

//Task #15

const room = {
  height: 3,
  tv: "samsung",
  big: true,
};

console.log(room.height);
console.log(room.tv);
console.log(room.big);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
console.log(room.tv.toUpperCase());

room.tv = "LG";
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);

delete room.big;
console.log(room);

//Task #16

function describeAnimal({ name, legs, color }) {
  return `This ${color} ${name} has ${legs} legs.`;
}

console.log(describeAnimal({ name: "dog", legs: 4, color: "yellow" }));

//Task #17

class Employee {
  constructor(name, age, position, salary) {
    this._name = name
    this._age = age;
    this._position = position;
    this._salary = salary;
  }

  get age() { return this._age; }
  set age(v) { this._age = v; }

  get position() { return this._position; }
  set position(v) { this._position = v; }

  get salary() { return this._salary; }
  set salary(v) { this._salary = v; }
}

const e = new Employee("Vika", 30, "Tester", 2000);
console.log(e.salary);
e.salary = 2500;
console.log(e.salary);

//Task #18

class Human {
  constructor(name, age, interest) {
    if (new.target === Human) {
      throw new Error("Abstract class");
    }
    this.name = name;
    this.age = age;
    this.interest = interest;
  }

  info() {
    return `${this.name} is ${this.age} and likes ${this.interest}`;
  }
}

class Person extends Human {}

const katia = new Person("Katia", 35, "fashion");
const yura = new Person("Yura", 44, "cars");

console.log(katia.info());
console.log(yura.info());

//Task #19

class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  #updatePassword(newPassword) {
    this.#password = newPassword;
  }

  resetPassword(newPassword) {
    this.#updatePassword(newPassword);
  }
}

class Admin extends User {
  isAdmin = true;

  deleteUser(name) {
    return `Пользователь ${name} был удален.`;
  }
}

const testUser = new User("user", "1234");
const testAdmin = new Admin("admin", "admin");
const result19 = [testUser, testAdmin];

testUser.resetPassword("0000");
console.log(testAdmin.isAdmin);
console.log(testAdmin.deleteUser("Katia"));
console.log(result19);