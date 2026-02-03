// Ex 1
const values = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = new Set(values);
console.log(uniqueValues);

// Ex 2
const roles = new Set(["user", "admin", "moderator"]);
console.log(roles.has("admin"));

// Ex 3
const profiles = new Map();
profiles.set("Nastya", "admin");
profiles.set("Masha", "user");
profiles.set("Vasya", "moderator");
console.log(profiles.get("Nastya"));

// Ex 4 
for (const profile of profiles) {
    console.log(profile[0], profile[1]);
}

// Ex 5
const statuses = [200, 200, 404, 500, 404];
const uniqueStatuses = new Set(statuses);
console.log(uniqueStatuses);

// Ex 6
const config = new Map([
  ["baseUrl", "https://test.com"],
  ["timeout", 5000]
]);
if (config.has("timeout")) {
    console.log(config.get("timeout"));
}

// Ex 7
const user = {
  login: "tester01",
  email: "test@mail.com",
  isActive: true
};
const { login, email } = user;
console.log(login, email);

// Ex 8
const response = {
  status: 200,
  data: { id: 1, name: "Test" },
  error: null
};
const { status, data } = response;
console.log(status, data);

// Ex 10
function sum(n){
    if (n === 0) {
        return 0;
    }
    console.log(n);
    return n + sum(n - 1);
}
console.log(sum(3));

