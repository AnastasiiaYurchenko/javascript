// Задача
// Сумма четных чисел

// const numbers = [1, 2, 5, 7, 8, 9, 10, 12, 25];
// let total = 0;

// for ( let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])

//     if (numbers[i] % 2 === 0) {
//         console.log('Четное', numbers[i])
//         total += numbers[i]
//     }
// }
// console.log('тотал:', total)

// или

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log('Четное', number);
//         total += number;
//     }
// }
// console.log('тотал:', total)

// или логика от обратного

// for (const number of numbers) {

//     if (number % 2 !== 0) {
//         console.log('Нечетное, эту итерацию пропускаем', number);
//         continue
//     }
//     total += number;
// }
// console.log('тотал:', total)

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
//     console.log(login);

//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind} найден.`
//         break
//     }
// }
// console.log(message)

// или

// for (const login of logins) {
//     console.log(login);
//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind} найден.`
//         break
//     }

// }
//  console.log(message)

// или

// message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`
// console.log(message)

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber:', smallestNumber);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
console.log(letters);
let invertedString = '';

for (const letter of letters) {
    console.log(letter);
    if (letter === letter.toLowerCase()) {
        invertedString += letter.toUpperCase();
    } else {
        invertedString += letter.toLowerCase();
    }
}

console.log('invertedString:', invertedString);
