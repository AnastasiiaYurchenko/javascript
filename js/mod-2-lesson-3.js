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

// const string = 'qWeRTzxCv';
// const letters = string.split('');
// console.log(letters);
// let invertedString = '';

// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLowerCase()) {
//         invertedString += letter.toUpperCase();
//     } else {
//         invertedString += letter.toLowerCase();
//     }
// }

// console.log('invertedString:', invertedString);

// или

// for (const letter of letters) {

//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// или

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for (let number of numbers) {
//     total += number;
// }
// console.log(total);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// Добавление (по индексу)
 
// const cardToInsert = 'Карточка-6';
// cards.splice(2, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'Обновленная карточка')
// console.table(cards);

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву.
    //Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// let genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Рок-н-рол');
// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);
// // или
// const lastElement = genres.length - 1;
// console.log(genres[lastElement]);

// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

//  1. розділити раядок на значення сторін прямокутника. split
//   2. перемножити значення

// const values = '8 11';

// const valuesArray = values.split(' ');
// console.log(valuesArray);

// const square = valuesArray[0] * valuesArray[1];
// console.log(square);

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// номер_елемента: значення_елемента = 1: '🍎'

// for (const fruit of fruits) {
//     console.log(fruit);
//     const index = fruits.indexOf(fruit);
//     console.log(`${index +1}: ${fruit}`)
// }
// або

// for (let i = 0; i < fruits.length; i += 1){
//     console.log(fruits[i]);
//     console.log(`${i+1}: ${fruits[i]}`)
// }

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

/**
 * 1. Розділити раядки на масиви. split
 * 2. Перебрати один з масивів. З доступом до індекса for
 * 3. Отримати по індексу імʼя і відповідний телефон
 */
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// console.log(namesArray);
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
//     console.log(`${namesArray[i]} : ${phonesArray[i]}`);
// }

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
// const string = '    Welcome to the future. Be Happy!   ';

// const stringArray = string.trim().split(' ');
// console.log(stringArray);

// stringArray.pop();
// console.log(stringArray);

// stringArray.shift();
// console.log(stringArray);

// const result = stringArray.join(' ');
// console.log(result);

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// const string1 = 'Welcome to the future';
// let newString = '';

// const newString = string1.split('').reverse().join('');
// console.log(newString);

// або

// for (let i = string1.length - 1; i >= 0; i -= 1) {
//     newString += string1[i];
// }
// console.log(newString);

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.log(langs.sort());

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, -10, 23, 37];
// let min = numbers[0];
 
// for (let number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// console.log(min);