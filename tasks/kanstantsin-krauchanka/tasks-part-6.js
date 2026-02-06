//1
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

//2
function getUser(id) {
  let userId = 67;
  if (id !== userId) {
    throw new NotFoundError("Пользователь не найден");
  }
}

//3
try {
  getUser(13);
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log(err.message);
  } else {
    console.log("Неизвестная ошибка");
  }
}

//4
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("OK"), 1000);
});

promise.then(
  result => console.log(result)
);

//5
async function asyncFunction() {
  let pr = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("OK"), 1000);
  });

  let result = await pr;
  console.log(result);
}
asyncFunction();

//6
async function f() {
  throw new Error("Error");
}

//8
import { isEven } from "./utils.js";

console.log(isEven(8));

//9
import {isEven as checkEven} from "./utils.js";

//10
function vacation(month) {
  if (month === "July" || month === "August") {
    console.log("Approved");
  } else {
    console.log("Denied");
  }
}

//11
function getTicketPrice(age) {
  let ticketPrice = 100;
  if (age <= 2) {
    return 0;
  } else if (age <= 10) {
    return ticketPrice / 2;
  } else if (age >= 18 && age <= 22) { //студенты
    return ticketPrice * 0.9;
  } else if (age >= 65) {
    return ticketPrice * 0.85;
  } else {
    return ticketPrice;
  }
}

//12
let arr = [[1,2],[3,4,5],[6,7,8],9,[10],[0,11],"Hello"];

function arrSum(array) {
  let newArr = array.flat()
                    .filter((number) => typeof(number) == "number");

  let sum = 0;
  for (let el of newArr) {
    sum += el;
  }
  return sum;
}

console.log(arrSum(arr));

//13
for (let i = 2; i <= 10; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
}

//14
function greet(name) {
  console.log(`Hello, ${name}!`);
}

//15
//a
let room = {
  height: 3,
  tv: "samsung",
  big: true,
};
//b
for (let key in room) {
  console.log(`${key} : ${room[key]}`);
}
//c
console.log(typeof(room.big));
//d
console.log(room.tv.length);
//e
console.log(room.tv.length - 1);
//f
console.log(room.tv.toUpperCase());
//g
room.tv = "LG";
//h
room.furniture = ["table", "chair", "sofa"];
//i
console.log(room.furniture[1]);
//j
delete room.big;

//16
let animal = {
  name: "dog",
  legs: 4,
  color: "yellow",
}

function task16(obj) {
  let keys = Object.keys(obj);
  let str = `This ${obj.color} ${obj.name} has ${obj.legs} ${keys[1]}.`;
  return str;
}

//17
class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  setAge(age) {
    this.age = age;
  }
  setPosition(position) {
    this.position = position;
  }
  setSalary(salary) {
    this.salary = salary;
  }

  getAge() {
    return this.age;
  }
  getPosition() {
    return this.position;
  }
  getSalary() {
    return this.salary;
  }
}

//18
class Human {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  info() {
    return `${this.name} is ${this.age}. Hobby: ${this.hobby}`;
  }
}

let human1 = new Human("Катя", 23, "reading");
let human2 = new Human("Юра", 24, "hiking");

console.log(human1.info());
console.log(human2.info());

//19
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

  deleteUser(userToDelete) {
    console.log(`Пользователь ${userToDelete} был удален.`);
  }
}