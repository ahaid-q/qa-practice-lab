// Task #5
    /*a.*/  const number = 15;
         let result = number + 5;
         console.log(result);
         //Это обычное сложение чисел.

    /*b.*/  const number2 = "28";
          result = number2 + 2;
         console.log(result);
         //Потому что + со строкой делает конкатенацию, число 2 приводится к строке.

    /*c.*/  console.log(null || 2 || undefined );
    //|| возвращает первое не пустое truthy значение, null — falsy, 2 — truthy - остановка.

    /*d.*/  let x = 5;
         let y = 10;

         console.log(x > 0 && y < 20); 
         console.log(x < 0 && y > 0); 
         console.log(x < 0 && y < 0); 
         console.log(x > 0 && "Hello"); 
         //true (5>0 true и 10<20 true), false (x<0 false - && сразу возвращает false), false (x<0 false),"Hello" (x>0 true, значит && возвращает второй операнд)

    /*e.*/  const a = 0;
         const b = "World";

         console.log(a > 0 || b.length > 0); 
         console.log(a > 0 || b.length === 0); 
         console.log(a > 0 || ""); 
         console.log(a < 0 || "Hello"); 
         //true (a>0 false, но b.length>0 true), false (a>0 false и b.length===0 false), "" (a>0 false - || возвращает второй операнд), "Hello" (a<0 false - возвращает "Hello")

    /*f.*/    x = 5;
          y = 10;
         let z = 15;
         result = (x > y || y < z) && !(z === x);
         console.log(result);
         //(x > y || y < z) - (5>10 false || 10<15 true) - true,!(z === x) -> !(15===5) -> !false - true, true && true - true