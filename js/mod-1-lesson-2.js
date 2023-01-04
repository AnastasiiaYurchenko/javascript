// ***switch Задача Напиши скрипт, где цена номера в отеле зависит от количества звезд,
// 1 звезда, цена 20
// 2 звезды - цена 30
// 3 звезды - цена 50
// 4 звезды - цена 100
// 5 звезд - цена 120
// больше звезд- такого количества звезд не существует

//  Можно обьединить несколько кейсов, там если выполен один из них, то есть ИЛИ кейс1 или кейс2

// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     // case 2:
//     //     price = 30;
//     //     break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 100;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('такого количества звезд не существует')
// }
// console.log(price);

// *** Задача Напиши скрипт, который считает общую сумму зп работников.
// - количество работников - переменная employees
//     - зп каждого работника - случайное число от 500 до 5000
// - сумма totalSalary и вывести  в консоль

// const employees = 5;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`)
//     totalSalary += salary;
//     console.log(totalSalary);
// }
// console.log('totalSalary:', totalSalary)


// *** Задача Напиши скрипт, который считает сумму четных чисел, которые входят в диапазон от мин до макс.

const min = 1;
const max = 5;
let total = 0;

// for (let i = min; i <= max; i += 1){
//     console.log(i);
//     if (i % 2 === 0) {
//         console.log('четное:', i)
//         total += i;
//     }
// }
// console.log('total:', total)

// или Логика от обратного

// for (let i = min; i <= max; i += 1){
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log(' не четное:', i);
//         continue
//     }
//     total += i;
//     console.log('четное:', i);
// }
// console.log('total:', total)

// *** Задача покупки.Если баланм меньше, чем сумма покупки то Сообщение, что денег недостаточно.Если больше, то вывести остаток

// let balance = 2000;
// const payment = 5000;

// if (balance >= payment) {
//     console.log('Все ок');
//     balance -= payment;
//     console.log(`Остаток денег на счету ${balance}`)
// } else {
//     console.log('Денег недостаточно')
// }
// console.log('Операция завершена')


