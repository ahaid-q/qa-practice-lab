//Task #1
const product = {
  name: "LapTop",
  price: 1000,
  get priceWithTax() {
    return this.price * 1.2;
  },
};
console.log(product.priceWithTax);

//Task #2
const product1= {
  name: "LapTop",
  price: 1000,

  set discount(value) {
    this.price *= 1 - value / 100;
  }
};

product1.discount = 20;
console.log(product1.price); 

//Task #3
const user = {
  firstName: "Vika",
  lastName: "Yakutsevich",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};

user.fullName = "Katia Nosova";
console.log(user.fullName);

//Task #4
const person3 = {
  _age: 18,

  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Error");
    }
  }
};

person3.age = 20;
console.log(person3._age);

//Task #5
const apiResponse = {
  data: { ok: true, items: [4,2,2026] },
  get jsonString() {
    return JSON.stringify(this.data);
  },
};
console.log(apiResponse.jsonString);

//Task #6
class User {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }
  greet() {
     console.log(`Hello, my name is ${this.name}`);
  }
}
const user1 = new User("Katia", 20);
user1.greet();

//Task #7
class User7 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends User7 {
  constructor(name, age, position) {
    super(name, age);       
    this.position = position;
  }

  showPosition() {
    console.log(`${this.name} works as ${this.position}`);
  }
}
 const emp = new Employee("Katia", 20, "Tester");

  emp.greet();        
  emp.showPosition(); 

  //Task #8

  class User8 {
  static info() {
    console.log("This is a User class");
  }
}

User8.info(); 

//Task #9

class User9 {
  #password;

  constructor(name, password) {
    this.name = name;          
    this.#password = password; 
  }
   checkPassword(pwd) {
    return this.#password === pwd;
  }
}
 const user9 = new User9("Katia", "1234");
console.log(user9.checkPassword("1234")); 

 //Task #10

class User10 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
class Admin extends User10 {
  constructor(name) {
    super(name);
  }

deleteUser(userName) {
    console.log(`User10 ${userName} deleted`);
  }
}
 const admin = new Admin("Vika");
admin.greet();                 
admin.deleteUser("Katia"); 

//Task #11

class MathUtils {
  static sum(a, b) {
    return a + b;
  }
}
const result = MathUtils.sum(2, 1);
console.log(result);

//Task #12

class Config {
  static TIMEOUT = 5000;
}
console.log(Config.TIMEOUT);

//Task #13

class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }
}
Counter.increment();
Counter.increment();
console.log(Counter.count);

//Task #14

class BasePage {
  static open(url) {
    console.log(`Opening page: ${url}`);
  }
}
class LoginPage extends BasePage {
}
LoginPage.open("/login");

//Task #15
class Person {
  #validateAge(age) {
    return age > 0;
  }

setAge(age) {
    if (this.#validateAge(age)) {
      console.log("Age is correct");
    } else {
      console.log("Error");
    }
  }
}
const person = new Person();
person.setAge(20);   
person.setAge(-20);   

//Task #16

class User16 {
  constructor() {
    this._role = "user"; 
  }
}
class Admin16 extends User16 {
  constructor() {
    super();
    this._role = "admin16"; 
  }
}
const user16 = new User16();
const admin16 = new Admin16();

console.log(user16._role);  
console.log(admin16._role); 

//Task #19

try {
  console.log("Попытка");
  throw new Error("Ошибка");
} catch (e) {
  console.log("Поймали ошибку");
} finally {
  console.log("Завершение блока");
}

//Task #20

function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль");
  }
  return a / b;
}
try {
  console.log(divide(8, 2)); 
  console.log(divide(8, 0)); 
} catch (e) {
  console.log("Ошибка:", e.message);
}

//Task #21

function getElement(selector) {
  const el = null; 

  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }

  return el;
}
try {
  getElement("#button");
} catch (e) {
  console.log(e.message);
}
console.log("Test continues");






