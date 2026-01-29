// Task #1
/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}*/

//Task #2

/*for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/

//Task #3

/*let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}*/

//Task #4

/*function greet(name) {
  console.log("Hello, " + name);
}

greet("Vika");*/

//Task #5

/*const square = function (number) {
  return number * number;
};

console.log(square(5));*/

//Task #6

/*const isEven = (number) => number % 2 === 0;
console.log(isEven(6));*/

//Task #7
/*function generateUsers(n) {
  const users = [];

  for (let i = 1; i <= n; i++) {
    users.push({
      id: i,
      name: "User" + i,
    });
  }

  return users;
}
console.log(generateUsers(5));*/

//Task#8
/*const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter(num => num % 2 === 0);

console.log(result);*/

//Task#9
/*const user = {
  name: "Vika",
  email: "a.com",
  isActive: true,
};

console.log(user.name);
console.log(user.email);
console.log(user.isActive);*/

//Task#10
/*const user = {
  name: "Alice",
  email: "alice@test.com",
  isActive: true,
};
user.printInfo = function () {
  console.log("User: " + this.name + ", email: " + this.email);
};
user.printInfo();*/

//Task # 11,12
/*class TestUser {
  constructor(id, role) {
    this.id = id;
    this.role = role;
  }

  isAdmin() {
    return this.role === "admin";
  }
}


const user1 = new TestUser(1, "admin");
const user2 = new TestUser(2, "user");

console.log(user1);
console.log(user2);
console.log(user1.isAdmin()); 
console.log(user2.isAdmin());*/

//Task #13
/*const apiResponse = {
  status: 200,
  data: {},
  isSuccess() {
    return this.status === 200;
  },
};
console.log(apiResponse.isSuccess());*/

//Task #14
/*const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);*/

//Task #15
/*const array = ["Login", "Logout", "Profile"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}*/

//Task #16
/*const arr = [1, 2, 3, 4];

const result = arr.map(num => num * 10);
console.log(result);*/

//Task #17
/*const arr = [5, 12, 8, 130, 44];

const result = arr.filter(num => num > 10);
console.log(result);*/

//Task #18
/*const roles = ["user1", "user2", "admin"];

const hasManager = roles.includes("manager");
console.log(hasManager);*/

