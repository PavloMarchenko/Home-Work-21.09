// 1. Напишіть функцію, що повертає куб числа.

// let cubeOfnumber = (a, b) => {

//   console.log(Math.pow(a, b));
// }
// cubeOfnumber(7, 3);




// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// let result = (a, b, c) => {
//   console.log((a + b) / c);
// }

// result(3, 4, 5);




// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

// let number = +prompt('Введіть число від 1 до 7');

// let dayOfweek = (a) => {
//   if (number < 1 || number > 7 || number.typeOf != number) {
//     alert('Ви ввели неправильне число, введіть число від 1 до 7');
//   }
//   if (number >= 1 && number <= 7) {

//     switch (number) {
//       case 1:
//       alert('Понеділок');
//       break;

//       case 2:
//       alert('Вівторок');
//       break;

//       case 3:
//       alert('Середа');
//       break;

//       case 4:
//       alert('Четвер');
//       break;

//       case 5:
//       alert("П'ятниця");
//       break;

//       case 6:
//       alert('Субота');
//       break;

//       case 7:
//       alert('Неділя');
//       break;

//     }
//   }
// };

// dayOfweek(number);




// 4. Реалізуйте функцію знаходження факторіала
// let val = 1;

// function fact(num) {
//     for (let i = 2; i <= num; i++)
//       val = val * i;
//       console.log(val);
// }

// fact(4);





// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

// let resultInseconds = (a, b, c) => {
//   let hoursToSeconds = a * 3600;
//   let minutesToSeconds = b * 60;
//   let seconds = c;

//   return hoursToSeconds + minutesToSeconds + seconds;
// }

// console.log(resultInseconds(3, 43, 55));






// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

// let sec = +prompt('enter any number')

// function secondsTo (s) {
//   let hours = Math.floor(s / 3600);
//   let minutes = Math.floor((s - (hours * 3600)) / 60);
//   let seconds = (s - (hours * 3600)) % 60;

//   if (hours > 23) {
//     alert('Більше одного дня');
//   }

//   alert(`${hours}: ${minutes}: ${seconds}`);
// }

// secondsTo(sec);
 





// 7. 4 відмінності ерров фанкшина від звичайної функції.

// 1. Завжди анонімна
// 2. Не має  this, arguments, super, і new.target. 
// 3. Не може бути  використана як конструктор
// 4. Має коротший синтаксис