
// const a = 12;
// console.log(a);

// const shouldRenew = confirm('Хотите продлить подписку?')
// console.log(shouldRenew);

// let quantity = prompt('Введите количество');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50.677px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// let elementHeight = '50.677px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);

// let salary = 1300.56678765;
// salary = salary.toFixed(2);
// salary = Number(salary);

// или запись в 1 строку
// salary = Number(salary.toFixed(2))
// console.log(salary)

// let quantity = "56";
// let value = 'Эту строку нельзя преобразовать в число';
// console.log(Number(quantity));
// console.log(Number(value));

// const base = 4;
// const power = 2;
// const result = Math.pow(base, power);
// console.log(result);

// // или аналог
// console.log(base ** power)
// console.log(4 ** 2)

// Напиши скрипт который просит ввести пользователя число и степень, возводит числло ы эту степень и выводит результат в консоль

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);

// Генерация псевдослучайного числа:
// Math.random
// Math.round
// Math.random() * (max - min) + min

const max = 50;
const min = 30;
const result = Math.round(Math.random() * (max - min) + min);

console.log(result)
