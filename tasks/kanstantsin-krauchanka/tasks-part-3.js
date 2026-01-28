//1
for (let i = 0; i < 11; i++) {
    console.log(i);
}

let i = 0;
while (i < 11) {
    console.log(i);
    i++;
}

//2
for (let i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//3
i = 11;
while(i) console.log(--i);

//4
function greet(name) {
    console.log("Hello, " + name);
}

//5
let sqrNum = function(num) {
    return num*num;
}

//6
let isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

//7
function generateUsers(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let user = {
            id: i,
            name: "User" + i,
        }
        arr.push(user);
    }
    return arr;
}

//8
let getEven = (arr) => {
    return arr.filter(num => num % 2 == 0);
}

let arr = getEven([1, 2, 3, 4, 5, 6]);
for (num of arr) {
    console.log(num);
}

//9
let user = {
    name: "Alice",
    email: "alice@test.com",
    isActive: true,
}

for (let key in user) {
    console.log(key);
}

//10
user.printInfo = function() {
    console.log(`User: ${this.name}, email: ${this.email}`);
}

//11
function TestUser(id, role) {
    this.id = id;
    this.role = role;
    
    //12
    this.isAdmin = function() {
        if (this.role == "admin") {
            return true;
        }
    }
}

let user1 = new TestUser(1, "user");
let user2 = new TestUser(2, "admin");

//13
let apiResponse = {
    status: 200,
    data: "2026-01-28",

    isSuccess() {
        if (this.status === 200) {
            return true;
        }
    }
}

//14
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.length);

//15
let elements = ["Login", "Logout", "Profile"];
for (element of elements) {
    console.log(element);
}

//16
let oldArr = [1, 2, 3, 4];
let newArr = oldArr.map(num => num * 10);

//17
let arr1 = [5, 12, 8, 130, 44];
console.log(arr1.filter(num => num > 10));

//18
let roles = ["manager", "developer", "tester"];
if (roles.includes("manager")) {
    console.log("manager role is in roles array");
}

//19
const responses = [
    {status: 200},
    {status: 404},
    {status: 200},
]

let responsesOK = [];
for(response of responses) {
    if (response.status === 200) {
        responsesOK.push(response);
    }
}