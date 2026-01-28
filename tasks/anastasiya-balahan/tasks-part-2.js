// Ex 3
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// Ex 4
let age = 20;
if (age >= 18 && age <= 65) {
    console.log("Доступ разрешён")
} else {
    console.log("Доступ запрещён")
}

// Ex 5
let age2 = 25;
if (age2 < 18) {
    console.log("Меньше 18")
} else if (age2 >= 18 && age2 <= 65) {
    console.log("Взрослый")
} else {
    console.log("Пожилой")
}

// Ex 7
let dayNum = 8;
switch (dayNum) {
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

// Ex 8
let age3 = 22;
let isLoggedIn = true;
if (age3 >= 18 && isLoggedIn) {
    console.log("Доступ разрешён")
}