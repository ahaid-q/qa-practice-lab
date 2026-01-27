//1
let firstName = "John";
let lastName = "Adams";
console.log(firstName + " " + lastName);

firstName = "Brandon";
lastName = "Smith";
console.log(firstName + " " + lastName + "\n");

//2
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + "1";
let x = "a" / 6;

console.log(typeof(a));
console.log(typeof(c));
console.log(typeof(str));
console.log(typeof(b));
console.log(typeof(y));
console.log(typeof(x) + "\n");

//3
const PI = 3.1415;
const myName = "Kostya";

console.log(myName + "\n" + PI + "\n");

//4
for (let i = 0; i < 31; i++) {
    if (i > 9 && i < 21)    { 
        console.log(true);
    }
    else console.log(false);
};

console.log("\n");


//7
let aa = "100";
let bb = "25px";
let cc = "3.14";

console.log(Number(aa));
console.log(Number(bb));
console.log(Number(cc));
console.log();
console.log(parseInt(aa));
console.log(parseInt(bb));
console.log(parseInt(cc));
console.log();
console.log(parseFloat(aa));
console.log(parseFloat(bb));
console.log(parseFloat(cc));
