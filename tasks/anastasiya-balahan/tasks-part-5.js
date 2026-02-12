// Ex 1 
const product = {
    name: "phone",
    price: 2500,
    get priceWithTax() {
        return this.price * (1 + 20 / 100);
    },
};
console.log(product.priceWithTax);

// Ex 2 
const product2 = {
    name: "phone",
    price: 2500,
    get priceWithTax() {
        return this.price * (1 + 20 / 100);
    },
    set discount(percent) {
        this.price = this.price * (1 - percent / 100);
    },
};
product2.discount = 20;
console.log(product2.price);

// Ex 3 
const user3 = {
    firstName: "James",
    lastName: "Smith",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const dividedFullName = value.split(" ");
        this.firstName = dividedFullName[0];
        this.lastName = dividedFullName[1];
    },
};
console.log(user3.fullName);
user3.fullName = "Michael Brown";
console.log(user3.fullName);

// Ex 4 
const person = {
    name: "Miley",
    _age: 24,
    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Invalid age");
        }
    },
};
person.age = 0;
console.log(person);

// Ex 5 
const apiResponse = {
  data: {
    status: 200,
    isError: false,
  },
  get jsonString() {
    return JSON.stringify(this.data);
  }
};
console.log(apiResponse.jsonString);

// Ex 6 
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
    return `Hello, my name is ${this.name}`;
    }
}
const user1 = new User("Ann", 21);
console.log(user1.greet());

// Ex 7  
class Employee extends User {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    showPosition() {
        return this.position;
    }
};
const employee1 = new Employee("Jack", 27, "Intern");
console.log(employee1.greet());
console.log(employee1.showPosition());

// Ex 8
class UserWithInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
    static info() {
        return "This is User class";
    }
}
console.log(UserWithInfo.info());

// Ex 9
class UserPass {
    #password;
    constructor(password){
        this.#password = password;
    }
    checkPassword(pwd) {
        return this.#password === pwd;
    }
}
const userPass1 = new UserPass(1234);
console.log(userPass1.checkPassword(1234)); 
console.log(userPass1.checkPassword(1233)); 

// Ex 10
class Admin extends User {
    constructor(name, age) {
        super(name, age);
    }
    deleteUser(userName) {
        console.log(`User ${userName} deleted.`);
    }
}
const admin1 = new Admin("Joe", 32);
admin1.deleteUser("Joe");
admin1.deleteUser("Joel");

// Ex 11
class MathUtils {
    static sum(a, b) {
        return a + b;
    }
}
console.log(MathUtils.sum(2,5));

// Ex 12
class Config {
    static TIMEOUT = 5000;
}
console.log(Config.TIMEOUT);

// Ex 13
class CallsCount {
    static count = 0;
    static callTest() {
        ++this.count;
  }
}
CallsCount.callTest();
console.log(CallsCount.count);
CallsCount.callTest();
CallsCount.callTest();
console.log(CallsCount.count);

// Ex 14
class BasePage {
    static open() {
        console.log("Open page");
    }
}

class LoginPage extends BasePage {}

LoginPage.open();

// Ex 15
class Profile {
    #age;
    #validateAge(age) {
        return age > 0;
    }
    setAge(age) {
        if (this.#validateAge(age)) {
            this.#age = age;
            console.log("Age is set");
        } else {
            console.log("Age is not valid");
        }
    }
}
const profile1 = new Profile();
profile1.setAge(19);
profile1.setAge(-1);

// Ex 16
class UserRole {
    _role = "user";

    setRole (role) {
        this._role = role;
    }
}

class Admin extends UserRole {
    constructor() {
        super();
        this.setRole("admin");
    }
    
}

const userRoleTest = new UserRole();
const adminTest = new Admin();
console.log(userRoleTest);
console.log(adminTest);

// Ex 19
try {
  console.log("Попытка");
  throw new Error("Ошибка!");
} catch (error) {
  console.log("Поймали ошибку", error.message);
} finally {
  console.log("Завершение блока");
}

// Ex 20
function divide(a, b) {
    if (b === 0) {
        throw new Error("Число должно быть больше нуля");
    }
    return a / b;
}

try {
    divide(6, 0);
} catch (error) {
    console.log(error.message); 
}

console.log(divide(6,0)); 


// Ex 21
function getElement(selector) {
   const el = null;
  //const el = document.querySelector(selector);
  if (!el) {
    throw new Error("Элемент не найден");
  }
}

try {
 getElement('le');
} catch (error) {
  console.log("Ошибка", error.message);
} finally {
  console.log("Продолжение теста");
}


