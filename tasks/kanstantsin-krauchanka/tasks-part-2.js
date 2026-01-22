//3
let rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);

//4
let age = 20;
if (age >= 18 && age <= 65) {
    console.log("Доступ разрешен");
}  else  {
    console.log("Доступ запрещен");
};

//5
age = 25;
if (age < 18) {
    console.log("Меньше 18");
}  else  if (age >= 18 && age <= 65)  {
    console.log("Взрослый");
}  else {
    console.log("Пожилой");
}

//7
let x = 3;
switch(x) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректный день");
}

//8
age = 22;
let isLoggedIn = true;

if(age >= 18 && isLoggedIn) {
    console.log("Доступ разрешен");
};