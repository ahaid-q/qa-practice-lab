//Task #1
const values = [1, 2, 2, 3, 4, 4, 5];   
const uniqueValues = new Set(values);  
console.log(uniqueValues);   

//Task#2
const roles = new Set(["admin", "user", "editor"]);
console.log(roles.has("admin")); 

//Task #3
const users = new Map();          
users.set("Alice", "admin");      
users.set("Bob", "user");

console.log(users.get("Alice"));  

//Task #4
for (const [name, role] of users) {
  console.log(name, role);
}

//Task #5
const statuses = [200, 200, 404, 500, 404];
const uniqueStatuses = new Set(statuses);
console.log(uniqueStatuses); 

//Task #6
const config = new Map([
  ["baseUrl", "https://test.com"],
  ["timeout", 5000]
]);

if (config.has("timeout")) {
  console.log(config.get("timeout"));
}

//Task #7
const user = {
  login: "tester01",
  email: "test@mail.com",
  isActive: true
};

const { login, email } = user;
console.log(login); 
console.log(email); 

//Task #8
const response = {
  status: 200,
  data: { id: 1, name: "Test" },
  error: null
};

const { status, data } = response;
console.log(status); 
console.log(data);   

//Task #10
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(4)); 