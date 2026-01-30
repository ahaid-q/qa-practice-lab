//1
const values = [1, 2, 3, 4, 5];
let uniqueValues = new Set(values);
console.log(uniqueValues);

//2
let roles = new Set(["admin", "user", "guest"]);
if (roles.has("admin")) {
  console.log("admin is in roles set");
}

//3
let users = new Map();
users.set("Kostya", "admin");
users.set("Petya", "user");
console.log(users.get("Petya"));

//4
for (user of users) {
  console.log(user);
};

//5
const statuses = [200, 200, 404, 500, 404];
let uniqueStatuses = new Set(statuses);

//6
const config = new Map([
  ["baseUrl", "https://test.com"],
  ["timeout", 5000]
]);

if (config.has("timeout")) {
  console.log(config.get("timeout"));
}

//7
const tester = {
  login: "tester01",
  email: "test@mail.com",
  isActive: true
};

let {login, email} = tester;
console.log(login);
console.log(email);

//8
const response = {
  status: 200,
  data: { id: 1, name: "Test" },
  error: null
};

let {status: responseStatus, data} = response;
console.log(responseStatus);
console.log(data);

//10
function sum(n) {
  return (n === 0) ? n : (n + sum(n-1));
}