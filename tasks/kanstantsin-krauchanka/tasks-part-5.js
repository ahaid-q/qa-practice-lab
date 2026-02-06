//1
let product = {
  name:  "Bananas",
  price: 5,
  
  get priceWithTax() {
    return this.price * 1.2;
  },

  //2
  set discount(percent) {
    this.price -= this.price * percent / 100;
  }
}

//3
let user = {
  firstName: "Kostya",
  lastName: "Kravchenko",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
}

//4
let person = {
  _age: 0,

  set age(years) {
    if(years > 0) {
      this._age = years;
      return;
    }
    console.log("Error: age cannot be less than 0");
  },
}

//5
let apiResponse = {
  data: "some data",

  get jsonString() {
    return JSON.stringify(this.data);
  },
}

//6
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  //8
  static info() {
    console.log("This is a User class");
  }

  //15
  #validateAge(age) {
    return age > 0;
  }

  setAge(age) {
    if(this.#validateAge(age)) {
      this.age = age;
    }
  }
}

//7
class Employee extends User {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  showPosition() {
    console.log(this.position);
  }
}

//9
class Account { //class Account т.к. User уже занято
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(pwd) {
    return this.#password === pwd;
  }
}

//10
class Admin extends User {
  deleteUser(userName) {
    //
  }
}

//11
class MathUtils {
  static sum(a,b) {
    return a + b;
  }
}

//12
class Config {
  static TIMEOUT = 5000;
}

//13
class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }
}

//14
class BasePage {
  static open() {
    //
  }
}

class LoginPage extends BasePage {
  //
}

//16
class UserWithRole {
  _role = "user";
}

class AdminRoleChanger extends UserWithRole {
  promote() {
    this._role = "admin";
  }
}

//19
try {
  console.log("Попытка");
  throw new Error("Ошибка!");
} catch(e) {
  console.log("Поймали:", e.message);
} finally {
  console.log("Завершение блока");
}

//20
function div(a,b) {
  if (b === 0) {
    throw new Error("Деление на 0");
  }
  return a / b;
}

try {
  div(67,0);
} catch(e) {
  console.log(e.message);
}

//21
function getElement(selector) {
  let el = null;
  return el;
}

try {
  if (!getElement("button[type='submit']")) {
    throw new Error("Element not found");
  }
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Продолжение теста");
}