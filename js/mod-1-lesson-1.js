
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

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result)

// const brand = 'Samsung';
// const brandInBd = 'samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(brand);
// console.log(normalizedBrand);

// или это можно записать так
// let brand = 'Samsung';
// const brandInBd = 'samsung';
// brand = brand.toLowerCase();
// console.log(brand);

// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';

// const string1 = 'митит, спам, опорлл рололо';
// const string2 = 'митит, РАСПРОДАЖА, опорлл рололо';
// const string3 = 'митит, спаПР, опорлл рололо';

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// console.log(string2.toLowerCase().includes(blackListedWord2));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));

// ***1. Задача

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2);

// const result = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, result)

// const result2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или после  ${x2}`, result2)

// *** Задача
// Напиши скрипт, котрый позволяет открыть чат, если пользователь
//     - друг
//     - онлайн
// - у него  не включен режим не беспокоить

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChart = isFriend && isOnline && !isDnd;
// console.log(`Можно открыть чат?`, canOpenChart);

// const salary = 501;
// let message;

// if (salary <= 500) {
//     message = 'Уровень 1'
// } else if (salary > 500 && salary <= 1000) {
//     message = 'Уровень 2'
// } else if (salary > 1000 && salary <= 2000) {
//     message = 'Уровень 3'
// } else {
//     message = 'Уровень 4'
// }
// console.log(message)

// Тернарный оператор

// const balance = 0;
// let message;

// message = balance >= 0 ? 'Положительный баланс' : 'Отрицательный баланс';

// console.log(message);

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді/ `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.
// // Індекс маси тіла необхідно округлити до однієї цифри після коми;
//  * 1. Знайти квадрат зросту людини //Math.pow()
//  * 2. Розділити вагу на квадрат зросту. // звичайне ділення
//  * 3. Округлити фінальний результат

let weight = '86,5';
let height = '1.76';

const weightInt = Number(weight.replace(',', '.'));
const heightInt = Number(height.replace(',', '.'));
console.log(weightInt);
console.log(heightInt);

const heightPow = Math.pow(heightInt, 2);
console.log(heightPow)

const bmi = weightInt / heightPow;
const roundedBmi = bmi.toFixed(1);
console.log(roundedBmi)
