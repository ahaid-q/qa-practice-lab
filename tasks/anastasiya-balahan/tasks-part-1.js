// Ex 1
let firstName = "John";
let lastName = "Adams";
console.log(firstName, lastName);

firstName = "Brandon";
lastName = "Smith";
console.log(firstName, lastName);

// Ex 2
let aa;
let cc = 9;
let str = "Hi 5!";
let bb = true;
let y = 9 + "1";
let x = "a" / 6;
console.log(typeof a);
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);

// Ex 3
const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const PI = 3.14159;
const SPEED_OF_LIGHT = 299792458;
console.log(DAYS_OF_WEEK);
console.log(PI);
console.log(SPEED_OF_LIGHT);

// Ex 4
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "true")
    } else {
        console.log(i, "false");
    }
}

// Ex 7
let a = "100";
let aNum = Number(a);
console.log(aNum, typeof aNum);

let b = "25px";
let bNum = parseInt(b);
console.log(bNum, typeof bNum);

let c = "3.14";
let cNum = parseFloat(c);
console.log(cNum, typeof cNum);

// Ex 8
console.log(Number(" "));
console.log(Number(""));
console.log(Number("abc"));

// Ex 9
console.log(Boolean(0)); 
console.log(Boolean(""));
console.log(Boolean(null));




