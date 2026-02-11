// Ex 1
class NotFoundError extends Error {
    constructor(message) {
    super(message);
    this.name = "NotFoundError";
    }
}
const notFoundError = new NotFoundError();
console.log(notFoundError);

// Ex 2
const testUserIds = [1, 2, 3, 4];
function getUser(id) {
    if (!testUserIds.includes(id)) {
        throw new NotFoundError();
    } else {
        return id;
    }
}

getUser(5);
getUser(3);

// Ex 3
try {
  getUser(5);
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log(error);
  } else {
    console.log("Unknown error");
  }
}

// Ex 4
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 1000);
});

promise.then(result => console.log(result));

// Ex 5 
async function processResult() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("OK");
        }, 1000);
});
    const result = await promise;
    console.log(result);
};

processResult();

// Ex 6
async function testError() {
    throw new Error("Test error");
}

async function testAsync() {
    try {
        await testError();
    } catch (error) {
        console.log("Error:", error.message);
  }
}

testAsync();

// Ex 7 utils.js is created

// Ex 8 
import { isEven } from "./utils.js";
console.log(isEven(81));

// Ex 9
import { isEven as checkEven} from "./utils.js";
console.log(checkEven(1));

// Ex 10
function confirmVacation(month) {
    if (month === "July" || month === "August") {
        console.log("approved");
    } else {
        console.log("denied");
    }
}
confirmVacation("February");
confirmVacation("July");

// Ex 11
function ticketPrice(age, price, isStudent) {
    if (age <= 2) {
        return 0;
    } else if (age <= 10 && age > 2) {
        return price * (1 - 50 / 100);
    } else if (age >= 65) {
        return price * (1 - 15 / 100);
    } 
    if (isStudent) {
        return price * (1 - 10 / 100);
    } else {
        return price;
    }
}
console.log(ticketPrice(1, 2500, false));
console.log(ticketPrice(8, 2500, false));
console.log(ticketPrice(67, 2500, false));
console.log(ticketPrice(19, 2500, true));
console.log(ticketPrice(19, 2500, false));

// Ex 12
const testArr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]
    .flat(Infinity)
    .filter(item => typeof item === "number")
    .reduce((sum, num) => sum + num, 0);

console.log(testArr);

// Ex 13
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}

// Ex 14 
function greet(name) {
    console.log("Hello, " + name);
}
greet("Nastya");

// Ex 15
const room = {
    height: 3,
    tv: "samsung",
    big: true,
}
for ([key, value] of Object.entries(room)) {
  console.log(key, value);
} //  b. Выведите в console все параметры объекта room 
console.log(typeof room.big); // c. Тип данных параметра big
console.log(room.tv.length); //  d. Длина строки параметра tv 
console.log(room.tv.length - 1); // e. Длина строки параметра tv минус 1
console.log(room.tv.toUpperCase()); //  f. Поменяйте samsung на все заглавные буквы

room.tv = "LG"; // g. Замените samsung на LG
room.furniture = ["table", "chair", "sofa"]; // h. Добавление в room furniture
console.log(room.furniture[1]); // i. выведите chair в console
delete room.big; //  j. Удаление параметра big

// Ex 16 
function message(animal) {
    console.log(`This ${animal.color} ${animal.name} has ${animal.legs} legs.`);
}

const animal = {
    name: "dog", 
    legs: 4, 
    color: "yellow",
}

message(animal);

// Ex 17
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }
    get age() {
        return this._age;
    }
    get position() {
        return this._position;
    }
    get salary() {
        return this._salary;
    }
    set age(newAge) {
        this._age = newAge;
    }
    set position(newPosition) {
        this._position = newPosition;
    }
    set salary(newSalary) {
        this._salary = newSalary;
    }
    
}

const employee = new Employee("Nastya", 26, "Intern", 100);
console.log(employee.age);
console.log(employee.age = 27);

// Ex 18
class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;
    }
    info() {
        return `Name: ${this.name}, age: ${this.age}, interest: ${this.interest}`;
    }
}

const human1 = new Human("Stacy", 22, "swimming");
const human2 = new Human("Yura", 23, "box");
console.log(human1.info());
console.log(human2.info());

// Ex 19
class User  {
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
    constructor(username, password){
        super(username, password);
    }
    
    deleteUser(userToDelete) {
        console.log(`Пользователь ${userToDelete} был удален.`);
    }
}
const testUser = new User("Nastya", "12345");
const testAdmin = new Admin("Ivan", "54321");

const users = [testUser, testAdmin];

console.log(users);
