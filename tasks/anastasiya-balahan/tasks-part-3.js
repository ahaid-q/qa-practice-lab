// // Ex 1
// for (let i = 1; i <= 10; i++) { 
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) { 
//   console.log(i);
//   i++;
// }

// // Ex 2
// for (let i = 1; i <= 20; i++) { 
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // Ex 3
// let k = 10;
// while (k >= 1) { 
//   console.log(k);
//   k--;
// }

// // Ex 4
// function greet(name) {
//     return "Hello, " + name;
// }
// console.log(greet("Nastya"));

// // Ex 5
// const square = function(a) {
//     return a ** 2;
// }
// console.log(square(2));

// // Ex 6
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(31));

// Ex 7
// function generateUsers(n) {
//     let users = [];
//     for (let i = 1; i <= n; i++) { 
//         let user = {
//             id: i,
//             name: "User" + i,
//         };
//         users.push(user);
// }
//     return users;
// }
// console.log(generateUsers(3));

// // Ex 8
// let numbers = [1,2,3,4,5,6];
// const isEvenNum = () => numbers.filter(n => n % 2 === 0);
// console.log(isEvenNum());

// // Ex 9
// const user = {
//     name: "Nastya",
//     email: "test@mail.ru",
//     isActive: true,
// }
// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`); 
// }

// // Ex 10
// user.printInfo = function () {
//     return `User: ${this.name}, email: ${this.email}`;
// }
// console.log(user.printInfo());

// // Ex 11
// function TestUser (id, role) {
//     this.id = id;
//     this.role = role;
// }
// const testUser1 = new TestUser("1", "admin");
// const testUser2 = new TestUser("2", "user");

// // Ex 12
// TestUser.prototype.isAdmin = function() {
//     return this.role === "admin";
// }
// const testUser3 = new TestUser("3", "user");
// console.log(testUser1.isAdmin());

// Ex 13
const apiResponse = {
  status: 200,
  data: 'test_data',
  isSuccess: function() {
    return this.status === 200;
  }
};
console.log(apiResponse.isSuccess());

// Ex 14
const numsA = [1,2,3,4,5];
console.log(numsA.length);

// Ex 15
const items = ["Login", "Logout", "Profile"];

for (const item of items) {
  console.log('Item:', item);
}

// Ex 16
const numsB = [1, 2, 3, 4];
const updatedNums = numsB.map(n => n * 10);
console.log(updatedNums);

// Ex 17
const numsC = [5, 12, 8, 130, 44];
const filteredNums = numsC.filter(n => n > 10);
console.log(filteredNums);

// Ex 18
const roles = ['admin', 'manager', 'user'];
console.log(roles.includes('manager'));

// Ex 19
const responses = [
  {status: 200},
  {status: 404},
  {status: 200}
];

const successfulResponses = responses.filter(r => r.status === 200);
console.log(successfulResponses);

